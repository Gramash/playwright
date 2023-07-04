import fs from 'fs'
import { Paths } from '../type/paths'

export const PATHS: Paths[] =  JSON.parse(fs.readFileSync('./src/resource/paths.json', 'utf-8'));