import './card.css';

import Heart from './image/heart.png';
import Download from './image/download.png';
import Ticket from './image/ticket.png';

function card() {

    return (
        <div className="card_block">
            <div className="bottom_block">
                <div className="info">
                    <p className="title">О фильме</p>
                    <div className="desk_block">
                        <p className="deskription">Ullamco sunt magna velit in elit eiusmod et ad ut sint veniam nostrud ipsum ullamco. Duis esse sint ad culpa ullamco. Dolore do sint esse esse dolore ullamco fugiat aute enim veniam enim ut nulla. Incididunt quis aliquip exercitation do labore laboris. Lorem officia enim sunt qui. Amet ex pariatur id proident consequat qui deserunt eu.</p>
                    </div>
                </div>
                <div className="buy">
                    <div className="buy_block">
                        <div className="btn_download btn_block">
                            <a href="" className="heart btn1 btnOneAndTwo">
                                <img src={Heart} className="images_btn1 images_btn"/>
                            </a>
                            <a href="" className="download btn1 btnOneAndTwo">
                                <img src={Download} className="images_btn1 images_btn"/>
                            </a>
                        </div>
                        <div className="btn_buy btn_block">
                            <a href="" className="download btn2 btnOneAndTwo">
                                <img src={Ticket} className="images_btn2 images_btn"/>
                                <p className="dowload_text">Купить билеты</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

function popUp() {
    let cont=document.querySelector('.popUpContainer').classList.add('popUp_active');
  }
function close() {
    let cont=document.querySelector('.popUpContainer').classList.remove('popUp_active');
  }

  
export default card;
export default popUp;