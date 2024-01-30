let Bars = document.querySelectorAll('.bar');

const TotHeight = '117';
const Totamount = '50';

fetch('./data.json')
.then(response => response.json())
.then(data =>{
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        Bars.forEach(bar => {
            if(bar.dataset.day == element.day){
                let amount = element.amount
                let total = (amount * TotHeight) / Totamount;;
                bar.style.height = `${total}px`;
                bar.title = `$${amount}`
                if(amount >= 50){
                    bar.className = 'HeightBar';
                }
            } 
        });   
    }
});