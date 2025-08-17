# Mega Guía: Creación de una Página Estática que Consume un Archivo JSON y Muestra Datos en el DOM

Esta guía te llevará paso a paso por el proceso de creación de una página web estática que carga un archivo JSON y muestra sus datos dinámicamente en el DOM usando **JavaScript puro**.

---

## 1. Estructura de Archivos

```
/project-root
│
├── index.html
├── static/
│   ├── weapons.json
│   └── index.css
└── src/
    └── index.js
```

---

## 2. Creación del Archivo JSON

Archivo `static/weapons.json`:

```json
{
  "data": [
    {
      "uuid": "1",
      "name": "Classic",
      "displayName": "Classic Pistol",
      "displayIcon": "classic.png",
      "shopData": { "cost": 200 }
    },
    {
      "uuid": "2",
      "name": "Vandal",
      "displayName": "Vandal Rifle",
      "displayIcon": "vandal.png",
      "shopData": { "cost": 2900 }
    }
  ]
}
```

---

## 3. HTML Base

Archivo `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./static/index.css">
  <title>Weapons Shop</title>
</head>
<body>
  <div id="root"></div>
  <script src="./src/index.js"></script>
</body>
</html>
```

ℹ️ `#root` es el contenedor donde se inyectará todo dinámicamente.  

---

## 4. Estilos con CSS

Archivo `static/index.css` (fragmento con lo esencial):

```css
body { font-family: Arial, sans-serif; background: #f4f4f9; margin: 0; }
#total-cost { font-size: 1.5rem; font-weight: bold; text-align: center; margin: 20px 0; }
.weapon-card { border: 1px solid #ccc; border-radius: 8px; padding: 15px; width: 200px; text-align: center; }
.weapon-card img { max-width: 100%; border-radius: 4px; }
.weapon-card button { background: #007bff; color: #fff; border: none; border-radius: 4px; padding: 10px; cursor: pointer; }
```

---

## 5. Lógica en JavaScript

Ahora sí: construimos la lógica poco a poco.  
Archivo: `src/index.js`.

---

### 5.1. Cargar el JSON

```javascript
fetch('./static/weapons.json')
  .then(response => response.json())
  .then(data => initializeWeaponsShop(data.data))
  .catch(error => console.error('Error fetching weapons:', error));
```

---

### 5.2. Función para mostrar atributos

```javascript
function addAttributeToComponent(component, label, value) {
  const attrContainer = document.createElement('p');
  attrContainer.innerHTML = `<strong>${label}:</strong> ${value}`;
  component.appendChild(attrContainer);
}
```

---

### 5.3. Guardar y recuperar datos en LocalStorage

```javascript
function getBoughtWeapons() {
  return JSON.parse(localStorage.getItem('boughtWeapons') || '[]');
}

function setBoughtWeapons(ids) {
  localStorage.setItem('boughtWeapons', JSON.stringify(ids));
}
```

---

### 5.4. Crear el contenedor del costo total

```javascript
function createTotalCostContainer(root) {
  const totalCostContainer = document.createElement('div');
  totalCostContainer.id = 'total-cost';
  totalCostContainer.textContent = 'Total Cost: $0';
  document.body.insertBefore(totalCostContainer, root);
  return totalCostContainer;
}
```

---

### 5.5. Crear una tarjeta de arma

```javascript
{
    const card = document.createElement('div');
    card.classList.add('weapon-card');

    const weaponName = document.createElement('h3');
    weaponName.textContent = weapon.name;

    const weaponImage = document.createElement('img');
    weaponImage.src = weapon.displayIcon;
    weaponImage.alt = weapon.name;

    const weaponPrice = weapon.shopData?.cost || 0;

    // estado inicial
    let boughtWeapons = getBoughtWeapons();
    let bought = boughtWeapons.includes(weapon.uuid);

    // botón
    const buyButton = document.createElement('button');
    buyButton.textContent = bought ? 'Sell' : 'Buy';
    buyButton.style.backgroundColor = bought ? 'red' : 'blue';

    if (bought) updateTotal(weaponPrice);

    buyButton.addEventListener('click', () => {
        let ids = getBoughtWeapons();

        if (!bought) {
            updateTotal(weaponPrice);
            buyButton.textContent = 'Sell';
            buyButton.style.backgroundColor = 'red';
            ids.push(weapon.uuid);
        } else {
            updateTotal(-weaponPrice);
            buyButton.textContent = 'Buy';
            buyButton.style.backgroundColor = 'blue';
            ids = ids.filter(id => id !== weapon.uuid);
        }

        bought = !bought;
        setBoughtWeapons(ids);
    });

    // render
    card.appendChild(weaponName);
    card.appendChild(weaponImage);
    addAttributeToComponent(card, 'Price', `$${weaponPrice}`);
    addAttributeToComponent(card, 'Name', weapon.displayName);
    card.appendChild(buyButton);

    return card;
}
```

---

### 5.6. Función principal para inicializar la tienda

```javascript
function initializeWeaponsShop(weapons) {
  const root = document.getElementById('root');
  const totalCostContainer = createTotalCostContainer(root);

  let totalCost = 0;
  const updateTotal = (amount) => {
    totalCost += amount;
    totalCostContainer.textContent = `Total Cost: $${totalCost}`;
  };

  const weaponsContainer = document.createElement('div');
  weaponsContainer.style.display = 'flex';
  weaponsContainer.style.flexWrap = 'wrap';
  weaponsContainer.style.gap = '20px';

  weapons.forEach(weapon => {
    const card = createWeaponCard(weapon, totalCostContainer, updateTotal);
    weaponsContainer.appendChild(card);
  });

  root.appendChild(weaponsContainer);
}
```

