export async function fetchCategories() {
  return await fetch('https://api.escuelajs.co/api/v1/categories').then((res) => res.json());
}

export async function fetchCategory(id: string | number) {
  return await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`).then((res) => res.json());
}
