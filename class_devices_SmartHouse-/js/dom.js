
let sm = new SmartHouse('Kate')
let shdiv = document.createElement('div');
document.body.appendChild(shdiv)
let shform = document.createElement('form');
shform.name = "shf";
shdiv.appendChild(shform);

let inputSH = document.createElement('input');
inputSH.value = 'Добавить холодильник'
inputSH.type = 'button';
inputSH.name = 'SHfridge'
shform.appendChild(inputSH)

let inputSh2 = document.createElement('input');
inputSh2.name = 'SHCoffee'
inputSh2.type = 'button';
inputSh2.value = 'Добавить кофеварку';
shform.appendChild(inputSh2)

let inputSh3 = document.createElement('input');
inputSh3.name = 'SHmicrowave'
inputSh3.type = 'button';
inputSh3.value = 'Добавть микроволновку';
shform.appendChild(inputSh3);

inputSH.addEventListener('click', function () {
    let fridge = new Fridge(500, -2)
    sm.addDevices(fridge)
    let fridgediv = document.createElement('div');
    fridgediv.id = 'myfdiv';
    document.body.appendChild(fridgediv);

    let inputf1 = document.createElement('input');
    inputf1.id = ' input1';
    inputf1.name = ' input1';
    inputf1.value = 'Включить холодильник';
    inputf1.type = 'button';

    inputf1.addEventListener('click', function () {

        fridge.enable();
        fridge.power = 1000;
        inputf1.style.display = 'none';
        let imgf = document.createElement('img')
        imgf.src = 'http://www.e-commerce.pl/zdjecia/Lodowki-wolnostojace/GR-B469BTQA-66363-big.jpg';
        imgf.width = '300';
        imgf.height = '600';
        fridgediv.appendChild(imgf)

        let formf = document.createElement('form');
        formf.name = "f";
        fridgediv.appendChild(formf)

        let inputf2 = document.createElement('input');
        inputf2.value = 'Добавьте еды'
        inputf2.type = 'text';
        inputf2.name = 'namef'
        formf.appendChild(inputf2)

        let inputff3 = document.createElement('input');
        inputff3.name = 'btnf'
        inputff3.type = 'button';
        inputff3.value = 'добавить еду';
        formf.appendChild(inputff3)

        let ul = document.createElement('ul');
        ul.id = 'fridge1';
        document.body.appendChild(ul);
        let inpf = document.forms.f.elements.namef;
        let addf = document.forms.f.elements.btnf;
        let fridge1 = document.getElementById('fridge1');
        addf.addEventListener('click', function () {
            fridge.addFood(inpf.value);
            let li = document.createElement('li');
            li.id = 'list'
            li.innerText = inpf.value;
            fridge1.appendChild(li);

        })



        let formf2 = document.createElement('form');
        formf2.name = "f2";
        fridgediv.appendChild(formf2)
        let inputf3 = document.createElement('input');
        inputf3.value = '-2'
        inputf3.type = 'number';
        inputf3.name = 'namef3';
        formf2.appendChild(inputf3)


        let inputf4 = document.createElement('input');
        inputf4.name = 'btn2'
        inputf4.type = 'button';
        inputf4.value = 'set';

        formf2.appendChild(inputf4)
        let inp2 = document.forms.f2.elements.namef3;
        let add2 = document.forms.f2.elements.btn2;
        add2.addEventListener('click', function () {

            let y = Number(inp2.value);

            fridge.temperature = y;
            if (y > 10) {
               let textdiv1 = document.createElement('div');
                let p1 = document.createElement('p')
                p1.innerText = 'включен режим разморозки.Нельзя положить еду,холоддильник размораживается'
                document.body.appendChild(textdiv1)
                textdiv1.appendChild(p1);
            }

            let textinf = 'Текущая температура холодильника:' + y
            let divinf = document.createElement('div');
            let pinf = document.createElement('p')
            pinf.innerText = textinf;
            fridgediv.appendChild(divinf)
            divinf.appendChild(pinf);
        })

    })
    fridgediv.appendChild(inputf1)
})
inputSh3.addEventListener('click', function () {
    let microwave = new Microwave(300, 1000);
    sm.addDevices(microwave)
    let microwavediv = document.createElement('div');
    microwavediv.id = 'myMdiv';
    document.body.appendChild(microwavediv);

    let inputm1 = document.createElement('input');
    inputm1.id = 'inputm1';
    inputm1.name = 'inputm1';
    inputm1.value = 'Включить микроволновку';
    inputm1.type = 'button';
    inputm1.addEventListener('click', function () {
        microwave.enable()
        inputm1.style.display = 'none';
        let imgm = document.createElement('img')
        imgm.src = 'http://delayvkusno.ru/wp-content/uploads/2012/12/9cf16ad9f0bd1943a2733eb4b2f1afcb.jpg';
        imgm.width = '300';
        imgm.height = '300';
        microwavediv.appendChild(imgm)
        let inputoff = document.createElement('input');
        inputoff.id = 'inputoff';
        inputoff.name = 'inputoff';
        inputoff.value = 'Выключить микроволновку';
        inputoff.type = 'button';
        inputoff.addEventListener('click', function () {
            microwave.disable()

        })
        let formm = document.createElement('form');
        formm.name = "fm";
        microwavediv.appendChild(formm)
        let inputm2 = document.createElement('input');
        inputm2.value = '2000'
        inputm2.type = 'number';
        inputm2.step = '1000'
        inputm2.name = 'namem';
        formm.appendChild(inputm2)


        let inputm3 = document.createElement('input');
        inputm3.name = 'btnm'
        inputm3.type = 'button';
        inputm3.value = 'set time';

        formm.appendChild(inputm3)
        let inpm = document.forms.fm.elements.namem;
        let addm = document.forms.fm.elements.btnm;
        addm.addEventListener('click', function () {

            let z = Number(inpm.value);

            microwave.timeToCook = z;
            microwave.run();
            let textdiv2 = document.createElement('div');
            let p2 = document.createElement('p')
            p2.innerText = microwave._onReady()
            document.body.appendChild(textdiv2)
            textdiv2.appendChild(p2);

        })


    })
    microwavediv.appendChild(inputm1)
})

inputSh2.addEventListener('click', function () {
    let coffeeMachine = new CoffeeMachine(100000, 400);
    coffeeMachine.power = 10000
    coffeeMachine.WaterAmount = 0;
    sm.addDevices(coffeeMachine)

    let div = document.createElement('div');
    div.id = 'mydiv';
    document.body.appendChild(div);
    let mainDiv = document.getElementById('mydiv');

    let newInput1 = document.createElement('input');
    newInput1.id = 'myid1';
    name = 'myid1'
    newInput1.value = 'Включить кофеварку';
    newInput1.type = 'button';
    newInput1.addEventListener('click', function () {
        coffeeMachine.enable();

        newInput1.style.display = 'none'
        let img1 = document.createElement('img')

        img1.src = 'https://cdn.comfy.ua/media/catalog/product/cache/4/thumbnail/395x554/9df78eab33525d08d6e5fb8d27136e95/m/a/magio_mg-960.jpg';
        img1.width = '300';
        img1.height = '400';
        mainDiv.appendChild(img1);
        let form = document.createElement('form');
        form.name = "f1";
        mainDiv.appendChild(form)
        let input2 = document.createElement('input');
        input2.value = 'залейтe воды '
        input2.name = "name"
        input2.type = 'text';
        form.appendChild(input2)
        let input3 = document.createElement('input');
        input3.name = 'btn'
        input3.type = 'button';
        input3.value = 'добавить воды';
        form.appendChild(input3)

        let inp = document.forms.f1.elements.name;
        let add = document.forms.f1.elements.btn;
        add.addEventListener('click', function () {
            coffeeMachine.WaterAmount = 0
            let x = Number(inp.value);
            console.log(x)
            coffeeMachine.addWater(x)
        })

        let newInput4 = document.createElement('input');
        newInput4.id = 'myid4';
        newInput4.value = 'сварить кофе';
        newInput4.type = 'button';
        newInput4.addEventListener('click', function () {
            
            coffeeMachine.run();
            
        });
        mainDiv.appendChild(newInput4)
    });
    mainDiv.appendChild(newInput1)
})