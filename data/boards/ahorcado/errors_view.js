
//data contains: data.value, data.icon and data.color
return card({
    content: `
        ${cardIcon({ data, size: '48' })}    
        ${cardValue({ value: data.value+"/6" })}
    `
});
