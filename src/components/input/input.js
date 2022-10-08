import './input.css';

function input(inp) {
    if (inp.ch == 'f1') {
        return (
            <>
                <div>
                    <input id="ch1" type="checkbox"></input>
                    <label for="ch1">Что</label>
                </div>
                <div>
                    <input id="ch2" type="checkbox"></input>
                    <label for="ch2">Сюда</label>
                </div>
                <div>
                    <input id="ch3" type="checkbox"></input>
                    <label for="ch3">Написать</label>
                </div>
                <div>
                    <input id="ch4" type="checkbox"></input>
                    <label for="ch4">без ограничений</label>
                </div>
            </>
        );
    }
    else if (inp.ch == 'f2') {
        return (
            <>
                <div>
                    <input id="ch5" type="checkbox"></input>
                    <label for="ch5">Утро</label>
                </div>
                <div>
                    <input id="ch6" type="checkbox"></input>
                    <label for="ch6">День</label>
                </div>
                <div>
                    <input id="ch7" type="checkbox"></input>
                    <label for="ch7">Вечер</label>
                </div>
                <div>
                    <input id="ch8" type="checkbox"></input>
                    <label for="ch8">Ночь</label>
                </div>
            </>
        )
    }
}

export default input;