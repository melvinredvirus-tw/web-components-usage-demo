import FeaturedProducts from '@/components/FeaturedProducts';

export default function Home() {
  return (
    <main>
      {/* Parallax Section */}
      <section
        className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center text-white"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg">Discover great products and offers.</p>
        </div>
      </section>

      {/* Regular Content */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Featured Categories</h2>
        <FeaturedProducts />
      </section>
    </main>
  );
}
