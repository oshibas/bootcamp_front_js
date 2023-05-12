export class Application {
  // private form: HTMLElement | null = null;

  start = async (): Promise<void> => {
    document.querySelector('form')?.addEventListener('submit', () => {
      document.querySelector('.list-title')!.textContent = "makocchan";
    });
    '}';
