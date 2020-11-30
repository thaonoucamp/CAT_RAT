class Cat {
    constructor(_name, _weight, _speed,) {
        this._name = _name;
        this._weight = _weight;
        this._speed = _speed;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    set sing(string) {
        this._sound = this._name + " meo meo";
    }

    fightRat(rat) {
        if (this._speed > rat._speed) {
            return this._name + " da bat duoc con chuot " + this._name;
        }
    }

    eatRat(rat) {
        if (rat._status) {
            rat._status = false;
            return this.weight += rat._weight;
            // return  'DA aN CHUOT' + rat.name;
        }
    }
}

