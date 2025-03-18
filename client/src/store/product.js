import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields." };
    }
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    if (response.status === 201) {
      set((state) => ({
        products: [...state.products, data.data],
      }));
      return { success: true, message: "Product created successfully." };
    } else {
      console.log("Error creating product.");
      return { success: false, message: "Error creating product." };
    }
  },
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    if (response.status === 200) {
      set({ products: data.data });
      return { success: true, message: "Successfully get products" };
    } else {
      console.log("Error deleting product.");
      return { success: false, message: "Error getting products." };
    }
  },
  deleteProduct: async (pid) => {
    const response = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));
      return { success: true, message: "Successfully deleted product" };
    } else {
      console.log("Error deleting product.");
      return { success: false, message: "Error deleting product." };
    }
  },
  updateProduct: async (pid, updatedProduct) => {
    const response = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await response.json();
    if (response.status === 200) {
      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? data.data : product
        ),
      }));
      return { success: true, message: "Successfully updated product" };
    } else {
      console.log("Error updating product.");
      return { success: false, message: "Error updating product." };
    }
  }
}));
