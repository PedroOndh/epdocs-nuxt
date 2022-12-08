import { execSync } from 'child_process';
import * as dotenv from 'dotenv';
dotenv.config(); // Adding local env vars for local development

export const GH_TOKEN = process.env.GH_TOKEN;
export const JIRA_TOKEN = 'pedroo@empathy.co:0658tSy1snZsxHNijg52A5C2'

export function exitError(message: string, e: unknown): never {
  console.error(message + '\n', e);
  process.exit(1);
}

export function exec(command: string): string {
  return execSync(command, { encoding: 'utf-8' });
}
