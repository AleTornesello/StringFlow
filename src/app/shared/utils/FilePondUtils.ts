import { FilePondInitialFile } from 'filepond';

export class FilePondUtils {
  public static getFilePondInitialFile(
    fileName: string,
    fileUri: string,
    fileSize?: number
  ): FilePondInitialFile {
    return {
      source: fileUri,
      options: {
        type: 'local',
        file: {
          name: fileName,
          size: fileSize ?? 0,
        },
        metadata: {
          poster: fileUri,
        },
      },
    };
  }
}
