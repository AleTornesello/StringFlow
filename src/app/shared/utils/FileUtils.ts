import { FilePondFile } from 'filepond';

export class FileUtils {

  public static getBase64(file: File): Promise<string> {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      let blob = new Blob([file]);
      reader.readAsDataURL(blob);
      reader.onload = () => {
        let result = reader.result as string;
        if (result) {
          resolve(result.split(';base64,')[1]);
        }
        reject(null);
      };
      reader.onerror = (error) => {
        reject(error);
      };
    });
  }

  public static splitFilename(filename: string) {
    return {
      name: filename.slice(0, ((filename.lastIndexOf('.') - 1) >>> 0) + 1),
      extension: filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2),
    };
  }
}
