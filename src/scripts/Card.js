import format from 'date-fns/format'

export class Card {
    constructor(data, selectors) {
        this._data = data;
        this._name = data.name;
        this._link = data.links.patch.small || 
        ( (data.rocket ===  '5e9d0d95eda69974db09d1ed') && 'https://i3.cpcache.com/merchandise/631_240x240_Front_Color-White.jpg?Size=Small-3x3&AttributeValue=NA&region=%7B%22name%22:%22FrontCenter%22,%22width%22:3.323587,%22height%22:3,%22alignment%22:%22MiddleCenter%22,%22orientation%22:0,%22dpi%22:200,%22crop_x%22:1,%22crop_y%22:2,%22crop_h%22:512,%22crop_w%22:569,%22scale%22:0.1673203,%22template%22:%7B%22id%22:112410814,%22params%22:%7B%7D%7D%7D&Filters=[%7B%27name%27:%27background%27,%27value%27:%27ddddde%27,%27sequence%27:2%7D]') ||
        ( (data.rocket === '5e9d0d95eda69973a809d1ec') && 'https://seeklogo.com/images/S/spacex-falcon-9-logo-47427B45A3-seeklogo.com.png');
        // this._cardId = data._id;
        this._date = new Date(this._data.date_utc);
        this._selectorsTemplate = selectors.content;

        this._card = this._getTemplate();
        this._cardPhoto = this._card.querySelector('.card__photo');
        this._cardTitle = this._card.querySelector('.card__tittle');
    }

    _getTemplate() {
        const cardcard = this._selectorsTemplate.querySelector('.card').cloneNode(true);
        return cardcard;
    }

    generateCard() {
        this._cardPhoto.src = this._link;
        this._cardPhoto.alt = this._name;
        this._cardTitle.textContent = '№' + this._data.flight_number + ' ' + this._data.name + ' Date: ' + format(this._date, 'dd.MM.yyyy HH:mm');

        // if (this._userId === this._cardOwnerId) {
        //     this._buttonDelete.classList.add('card__delete-button_active');
        // };

        return this._card;
    }
}
