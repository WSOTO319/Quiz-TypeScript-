export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

/*Side Note:
  .tsx extension is used when we want to embed JSX elements inside the files while 
  .ts is used for plain Typescript files and do not support adding JSX Elements.*/
