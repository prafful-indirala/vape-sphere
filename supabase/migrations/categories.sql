-- Create the categories table
CREATE TABLE categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    icon_path VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Insert the initial categories
INSERT INTO categories (name, icon_path, slug) VALUES
    ('E-liquids', '/icons/e-liquid.svg', 'e-liquids'),
    ('Disposable Vape', '/icons/disposable.svg', 'disposable-vape'),
    ('Starter Kits', '/icons/starter-kit.svg', 'starter-kits'),
    ('Vape Kits', '/icons/vape-kit.svg', 'vape-kits'),
    ('Tanks', '/icons/tank.svg', 'tanks'),
    ('Atomizers', '/icons/atomizer.svg', 'atomizers'),
    ('Batteries', '/icons/battery.svg', 'batteries'),
    ('Accessories', '/icons/accessories.svg', 'accessories');

