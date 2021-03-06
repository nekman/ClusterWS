import { Worker } from './worker'
import { logError } from '../../common/console'
import { EventEmitter } from '../../common/emitter'
import { socketDecodeMessages, socketEncodeMessages } from '../../common/messages'

export class Socket {
    events: EventEmitter
    channels: any[]

    constructor(public socket: any, public server: Worker) {
        const onPublish: any = (message: any): any => this.channels.indexOf(message.channel) !== -1 ? this.send(message.channel, message.data, 'publish') : ''
        this.server.socketServer.emitter.on('#publish', onPublish)

        let lost: number = 0
        const pingInterval: any = setInterval(() => {
            if (lost++ > 2) return this.disconnect(4001, 'Did not get pongs')
            this.send('#0', null, 'ping')
        }, this.server.options.pingInterval)

        this.send('configuration', { ping: server.options.pingInterval }, 'system')

        this.events = new EventEmitter()
        this.channels = []

        this.socket.on('message', (message: any) => {
            if (message === '#1') return lost = 0

            try {
                message = JSON.parse(message)
            } catch (e) { return logError('PID: ' + process.pid + '\n' + e + '\n') }

            socketDecodeMessages(this, message)
        })

        this.socket.on('error', (err: any): void => this.events.emit('error', err))
        this.socket.on('close', (code: number, reason: any): void => {
            clearInterval(pingInterval)
            this.events.emit('disconnect', code, reason)
            this.server.socketServer.emitter.removeListener('#publish', onPublish)

            for (const key in this) {
                if (this.hasOwnProperty(key)) delete this[key]
            }
        })
    }

    on(event: string, listener: any): void {
        this.events.on(event, listener)
    }

    send(event: string, data: any, type?: string): void {
        this.socket.send(socketEncodeMessages(event, data, type || 'emit'))
    }

    disconnect(code?: number, reason?: any): void {
        this.socket.close(code, reason)
    }
}