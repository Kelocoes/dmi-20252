// Fetch the JSON file and initialize the application
fetch('./static/weapons.json')
    .then(response => response.json())
    .then(data => initializeWeaponsShop(data.data))
    .catch(error => console.error('Error fetching weapons:', error));

function addAttributeToComponent(component, label, value) {
    const attrContainer = document.createElement('p');
    attrContainer.innerHTML = `<strong>${label}:</strong> ${value}`;
    component.appendChild(attrContainer);
}

function getBoughtWeapons() {
    return JSON.parse(localStorage.getItem('boughtWeapons') || '[]');
}

function setBoughtWeapons(ids) {
    localStorage.setItem('boughtWeapons', JSON.stringify(ids));
}

function initializeWeaponsShop(weapons) {
    const root = document.getElementById('root');
    const totalCostContainer = document.createElement('div');
    totalCostContainer.id = 'total-cost';
    totalCostContainer.textContent = 'Total Cost: $0';
    document.body.insertBefore(totalCostContainer, root);

    let totalCost = 0;
    const weaponsContainer = document.createElement('div');
    weaponsContainer.style.display = 'flex';
    weaponsContainer.style.flexWrap = 'wrap';
    weaponsContainer.style.gap = '20px';

    // Recuperar armas compradas
    const boughtWeapons = getBoughtWeapons();

    weapons.forEach(weapon => {
        const weaponCard = document.createElement('div');
        weaponCard.classList.add('weapon-card');

        const weaponName = document.createElement('h3');
        weaponName.textContent = weapon.name;

        const weaponImage = document.createElement('img');
        weaponImage.src = weapon.displayIcon;
        weaponImage.alt = weapon.name;

        let weaponPrice = weapon.shopData && weapon.shopData.cost ? weapon.shopData.cost : 0;

        let bought = boughtWeapons.includes(weapon.uuid);

        const buyButton = document.createElement('button');
        buyButton.textContent = bought ? 'Sell' : 'Buy';
        buyButton.style.backgroundColor = bought ? 'red' : 'blue';

        if (bought) {
            totalCost += weaponPrice;
        }

        buyButton.addEventListener('click', () => {
            let ids = getBoughtWeapons();

            if (!bought) {
                totalCost += weaponPrice;
                buyButton.textContent = 'Sell';
                buyButton.style.backgroundColor = 'red';
                bought = true;
                ids.push(weapon.uuid);
            } else {
                totalCost -= weaponPrice;
                buyButton.textContent = 'Buy';
                buyButton.style.backgroundColor = 'blue';
                bought = false;
                ids = ids.filter(id => id !== weapon.uuid);
            }
            setBoughtWeapons(ids);
            totalCostContainer.textContent = `Total Cost: $${totalCost}`;
        });

        weaponCard.appendChild(weaponName);
        weaponCard.appendChild(weaponImage);
        addAttributeToComponent(weaponCard, 'Price', `$${weaponPrice}`);
        addAttributeToComponent(weaponCard, 'Name: ', `${weapon.displayName}`);
        weaponCard.appendChild(buyButton);
        weaponsContainer.appendChild(weaponCard);
    });

    totalCostContainer.textContent = `Total Cost: $${totalCost}`;
    root.appendChild(weaponsContainer);
}
