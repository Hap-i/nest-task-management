import * as AdmZip from 'adm-zip';

export async function createZipFileFromModules(
  content: string,
): Promise<Buffer> {
  const zip = new AdmZip();
  zip.addFile('res.txt', Buffer.from(content, 'utf8'));
  return zip.toBuffer();
}
