-- Create the categories table
CREATE TABLE categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    icon_path VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create the products table
CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255) NOT NULL,
    category_id BIGINT REFERENCES categories(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Insert sample categories
INSERT INTO categories (name, slug, icon_path) VALUES
('E-liquids', 'e-liquids', '/icons/e-liquid.svg'),
('Disposable Vapes', 'disposable-vapes', '/icons/disposable.svg'),
('Starter Kits', 'starter-kits', '/icons/starter-kit.svg'),
('Vape Kits', 'vape-kits', '/icons/vape-kit.svg'),
('Tanks', 'tanks', '/icons/tank.svg'),
('Atomizers', 'atomizers', '/icons/atomizer.svg'),
('Batteries', 'batteries', '/icons/battery.svg'),
('Accessories', 'accessories', '/icons/accessories.svg');

-- Insert sample products
INSERT INTO products (name, description, price, image, category_id) VALUES
('Fruity Blast E-Liquid', 'A refreshing mix of tropical fruits', 19.99, '/images/fruity-blast.jpg', (SELECT id FROM categories WHERE slug = 'e-liquids')),
('Menthol Chill E-Liquid', 'Cool and refreshing menthol flavor', 18.99, '/images/menthol-chill.jpg', (SELECT id FROM categories WHERE slug = 'e-liquids')),
('Puff Bar Disposable', 'Ready to use disposable vape pen', 9.99, '/images/puff-bar.jpg', (SELECT id FROM categories WHERE slug = 'disposable-vapes')),
('Vaporesso GTX One', 'All-in-one starter kit for beginners', 39.99, '/images/gtx-one.jpg', (SELECT id FROM categories WHERE slug = 'starter-kits')),
('Voopoo Drag X', 'Powerful mod with innovative PnP coil system', 59.99, '/images/drag-x.jpg', (SELECT id FROM categories WHERE slug = 'vape-kits')),
('Horizon Falcon 2', 'Sub-ohm tank with exceptional flavor', 29.99, '/images/falcon-2.jpg', (SELECT id FROM categories WHERE slug = 'tanks')),
('Hellvape Dead Rabbit V2 RDA', 'Rebuildable dripping atomizer for flavor chasers', 34.99, '/images/dead-rabbit-v2.jpg', (SELECT id FROM categories WHERE slug = 'atomizers')),
('Samsung 30Q 18650', 'High-drain 18650 battery for regulated mods', 9.99, '/images/samsung-30q.jpg', (SELECT id FROM categories WHERE slug = 'batteries')),
('Coil Master DIY Kit V3', 'Complete toolkit for rebuilding atomizers', 49.99, '/images/coil-master-kit.jpg', (SELECT id FROM categories WHERE slug = 'accessories'));

-- Set up policies to allow public read access
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access on categories" ON categories FOR SELECT USING (true);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access on products" ON products FOR SELECT USING (true);

