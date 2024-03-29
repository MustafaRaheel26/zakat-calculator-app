document.getElementById('calculateBtn').addEventListener('click', function() {
    const gold = parseFloat(document.getElementById('gold').value) || 0;
    const silver = parseFloat(document.getElementById('silver').value) || 0;
    const dollars = parseFloat(document.getElementById('dollars').value) || 0;
  
    const totalWealth = gold + (silver / 60) + dollars;
  
    const zakatAmount = totalWealth * 0.025;
  
    document.getElementById('result').innerHTML = `<p>Total Zakat Due: $${zakatAmount.toFixed(2)}</p>`;
  });
  