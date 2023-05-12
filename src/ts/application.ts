export class Application {
  // private form: HTMLElement | null = null;
  // 作成中
  start = async (): Promise<void> => {

    document.querySelector('form')?.addEventListener('submit', () => {
      document.querySelector('.list-title')!.textContent = "makocchan";
    });

    '}';
