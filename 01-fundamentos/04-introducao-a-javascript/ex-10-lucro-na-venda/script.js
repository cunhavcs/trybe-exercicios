const valorCusto = 10;
const valorVenda = 50;

const impostoSobreOCusto = valorCusto * 0.2;
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const lucro = valorVenda - valorCustoTotal;

// Lucro ao vender 1000 unidades do produto
if (valorCusto < 0 || valorVenda < 0) {
  console.log('(!) Erro: Os valores de entrada não podem ser menores que zero');
} else {
  console.log(`Lucro na venda de mil produtos: R$ ${lucro * 1000},00`);
}
