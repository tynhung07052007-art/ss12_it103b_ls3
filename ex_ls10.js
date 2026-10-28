
const readline = require('readline-sync');

let subscriptions = [];

function addSubscription() {
  console.log('Chuc nang them thue bao');
  const name = readline.question('Nhap ten khach hang: ');

  if (name.trim() === '') {
    console.log('Ten khach hang khong duoc de trong!');
    return;
  }

  const subscription = {
    subscriptionId: 'SUB_' + (subscriptions.length + 1),
    customerName: name,
    planTier: 'PERSONAL'
  };

  subscriptions.push(subscription);
  console.log('Them thue bao thanh cong!');
}

function listSubscriptions() {
  console.log('Danh sach thue bao');

  if (subscriptions.length === 0) {
    console.log('Danh sach dang trong!');
    return;
  }

  console.table(subscriptions);
}

function updateSubscription() {
  const id = readline.question('Nhap ma thue bao can cap nhat: ');

  for (let i = 0; i < subscriptions.length; i++) {
    if (subscriptions[i].subscriptionId === id) {
      const plan = readline.question('Nhap goi moi (PERSONAL/FAMILY): ');

      if (plan === 'PERSONAL' || plan === 'FAMILY') {
        subscriptions[i].planTier = plan;
        console.log('Cap nhat thanh cong!');
      } else {
        console.log('Goi cuoc khong hop le!');
      }

      return;
    }
  }

  console.log('Khong tim thay thue bao!');
}

function deleteSubscription() {
  const id = readline.question('Nhap ma thue bao can xoa: ');

  for (let i = 0; i < subscriptions.length; i++) {
    if (subscriptions[i].subscriptionId === id) {
      subscriptions.splice(i, 1);
      console.log('Xoa thue bao thanh cong!');
      return;
    }
  }

  console.log('Khong tim thay thue bao!');
}

function calculateTotal() {
  console.log('So luong thue bao hien tai: ' + subscriptions.length);
}

function main() {
  let choice;

  do {
    console.log('\n===== MENU RIKKEISTREAM =====');
    console.log('1. Them thue bao');
    console.log('2. Xem danh sach');
    console.log('3. Cap nhat thue bao');
    console.log('4. Xoa thue bao');
    console.log('5. Dem so luong thue bao');
    console.log('0. Thoat');

    choice = readline.question('Nhap lua chon: ');

    switch (choice) {
      case '1':
        addSubscription();
        break;

      case '2':
        listSubscriptions();
        break;

      case '3':
        updateSubscription();
        break;

      case '4':
        deleteSubscription();
        break;

      case '5':
        calculateTotal();
        break;

      case '0':
        console.log('Thoat chuong trinh!');
        break;

      default:
        console.log('Lua chon khong hop le!');
    }
  } while (choice !== '0');
}

main();
