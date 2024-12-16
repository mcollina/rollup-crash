import { Worker, isMainThread } from 'node:worker_threads'
import { join } from 'node:path'

new Worker(join(import.meta.dirname, 'build.js'))
