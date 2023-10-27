document.addEventListener('DOMContentLoaded', function(){//показываем таблицу после загрузки dom полностью
  const table = document.getElementById('data-table');
  const tbody = document.getElementById('data-body');
  let data = [];//создаем пустой массив чтобы добавить данные из api
  let count = 1;//создаем count для подчсета страницы
  let sortDirection = 1; //для сортировки
  const itemsPerPage = 50;//сколько элементов на странице

  async function getTable() {
    try {
        const response = await fetch('http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true');
        data = await response.json();//используем async и fetch для извлечения данных
        renderTable(count);
    } catch (err) {
        console.error('Не удалось взять данные', err);
    }
  }

  const sortData = function(key) {//для сортировки данных
    data.sort((a, b) => {
      console.log(a)
        if (typeof a[key] === 'string') {//если значение строка
            return a[key].localeCompare(b[key]) * sortDirection;//умножаем на 1 или -1 чтобы ставить в обратное положение или сортировать по localeCompare
        }
        return (a[key] - b[key]) * sortDirection;//если не строка что сортируем по - 
    });
    sortDirection = -sortDirection; // используем toggle для того чтобы сортировать обратно или нет
  }

  const renderTable = function(page) {
    tbody.innerHTML = '';
    const start = (page - 1) * itemsPerPage;//узнаем начало откуда показывать
    const end = page * itemsPerPage;//узнаем конец
    const paginatedData = data.slice(start, end);//из данных извлекаем откуда брать
    paginatedData.forEach((item) => {//и показываем на странцие
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.tel}</td>
            <td>${item.address}</td>
            <td>${item.city}</td>
            <td>${item.state}</td>
            <td>${item.zip}</td>
        `;
        tbody.appendChild(row);//вставляем в таблицу
    });
  }

  table.addEventListener('click', function(e) {
    if (e.target.tagName !== 'TH') return;
    const sortKey = e.target.dataset.index;
    sortData(sortKey);//передаем data
    renderTable(count);//передаем count 
  });

  document.getElementById('next').addEventListener('click', function() {//при клике на кнопку следующее то мы увеличиваем count для показа новых данных
    count++;
    renderTable(count);
  });

  document.getElementById('prev').addEventListener('click', function() {//при клике на кнопку предыдущее то мы уменьшаем count для показа новых данных
    count--;
    if (count < 1) count = 1;
    renderTable(count);
  });

  getTable();
})

