import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { buscarProdutos, criarProduto, atualizarProduto, deletarProduto } from "../services/produtoService";

export const fetchProdutos = createAsyncThunk("produtos/fetchProdutos", async () => {
  return await buscarProdutos();
});

export const addProduto = createAsyncThunk("produtos/addProduto", async (produto) => {
  return await criarProduto(produto);
});

export const updateProduto = createAsyncThunk("produtos/updateProduto", async ({ id, produto }) => {
  return await atualizarProduto(id, produto);
});

export const removeProduto = createAsyncThunk("produtos/removeProduto", async (id) => {
  await deletarProduto(id);
  return id;
});

const produtosSlice = createSlice({
  name: "produtos",
  initialState: {
    lista: [],
    status: "idle",
    erro: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lista = action.payload;
      })
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.status = "failed";
        state.erro = action.error.message;
      })
      .addCase(addProduto.fulfilled, (state, action) => {
        state.lista.push(action.payload);
      })
      .addCase(updateProduto.fulfilled, (state, action) => {
        const index = state.lista.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.lista[index] = action.payload;
      })
      .addCase(removeProduto.fulfilled, (state, action) => {
        state.lista = state.lista.filter(p => p.id !== action.payload);
      });
  },
});

export default produtosSlice.reducer;   