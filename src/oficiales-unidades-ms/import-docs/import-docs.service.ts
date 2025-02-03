import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class ImportDocsService {
    async processExcel(fileBuffer: Buffer) {
        return new Promise((resolve, reject) => {

            // const pythonPath = "C:\Users\roman\AppData\Local\Microsoft\WindowsApps\python.exe";
            const pythonPath = "C:/Users/roman/anaconda3/python.exe";

            const pythonProcess = spawn(pythonPath, ['src/oficiales-unidades-ms/import-docs/process_excel.py']);
            // const pythonProcess = spawn('python3', ['/'])

            let result = '';
            let errorResult = '';
            pythonProcess.stdout.on('data', (data) => {
                result += data.toString();
            });

            pythonProcess.stderr.on('data', (data) => {
                console.log(`stderr: ${data}`);
            });

            pythonProcess.on('close', (code) => {
                console.log(`child process exited with code ${code}`);

                if (code !== 0) {
                    console.error(`❌ Error en el script de Python: ${errorResult}`);
                    reject(errorResult);
                    return;
                }

                try {
                    const parsedResult = JSON.parse(result); // 📌 Convertimos a JSON antes de resolver
                    resolve(parsedResult);
                } catch (error) {
                    console.error("❌ Error al parsear JSON:", error, result);
                    reject("Error al procesar el JSON de Python.");
                }
            });

            pythonProcess.stdin.write(fileBuffer);
            pythonProcess.stdin.end();
        });
    }
}
