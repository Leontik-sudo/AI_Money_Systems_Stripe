
export default function Success() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Спасибо за покупку!</h1>
      <p className="text-xl mb-4">Ваш продукт доступен для скачивания:</p>
      <a href="/AI_Money_Systems_Product.zip" download className="text-indigo-400 underline">Скачать продукт</a>
    </div>
  );
}
