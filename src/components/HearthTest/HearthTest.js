import React, { useState } from "react";
//import { useAuth } from "../../Context/AuthContext";
import ShowHearthTest from "./ShowHearthTest";


function Hearth_Test() {

    //const {user} = useAuth();

    const [hearthTestForm, setHearthTestForm] = useState({
        haveGenetic:'',
        age:'',
        smoke:'',
        nutrition:'',
        insulin:'',
        cholesterol:'',
        steatorrhoeicHepatosis:'',
        inflammation:'',
        rate:'',
        hypertension:'',
        movement:'',
        stres:''
    });

    const handleChange = (event) => {
        setHearthTestForm({...hearthTestForm, [event.target.name]:event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (localStorage.getItem('currentUser')) {
            const token = localStorage.getItem('tokenKey');
            fetch("/hearthtest",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token,
                },
                body:JSON.stringify({...hearthTestForm, userId:localStorage.getItem('currentUser')})
            })
            .then(res => {
                res.json();
                if(res.ok){
                    alert("Başarıyla Kaydedildi. userid: " + localStorage.getItem('currentUser'))
                }
                else{
                    alert("Bir şeyler yanlış gitti");
                }
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className="container">
           {/*  <form action="" className="" method="POST" id="" onSubmit={handleSubmit}>*/}
               
                    {/* 1 */}
                    <div className="form-group mt-5">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Ailenizde birinci derecede akrabalarda koroner arter hastalığı olan yani kalp krizi geçiren stent uygulanan
                                    veya bypass ameliyatı olan var mı ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="genetic_no" name="have_genetic" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="genetic_no">Yok</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="genetic_yes" name="have_genetic" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="genetic_yes">1 kişide var</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="genetic_more" name="have_genetic" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="genetic_more">1'den fazla kişide var</label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 2 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Kaç Yaşındasınız ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="less35" name="age" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="less35">35'in altında</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="between35and50" name="age" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="between35and50">35-50</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="more50" name="age" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="more50">50'in üstünde</label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 3 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Sigara kullanıyor musunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="smoke_0" name="smoke" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="smoke_0">Hiç içmedim</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="smoke_1" name="smoke" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="smoke_1">Günde 10 tanenin altında</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="smoke_2" name="smoke" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="smoke_2">Günde 10 taneden fazla</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="smoke_3" name="smoke" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="smoke_3">Günde 1 paketten fazla</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 4 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Nasıl besleniyorsunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="nutrition_0" name="nutrition" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="nutrition_0">Hamur işi ve hayvansal gıdalar</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="nutrition_1" name="nutrition" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="nutrition_1">Dengeli besleniyorum</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="nutrition_2" name="nutrition" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="nutrition_2">Akdeniz tarzı besleniyorum</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 5 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Şeker Hastalığınız var mı ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="insulin_0" name="insulin" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="insulin_0">Yok</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="insulin_1" name="insulin" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="insulin_1">İnsülin direnci var</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="insulin_2" name="insulin" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="insulin_2">Şeker hastalığı var</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="insulin_3" name="insulin" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="insulin_3">İnsülin iğnesi kullanıyorum</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 6 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Kolestrol düzeyiniz nasıl ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="cholesterol_0" name="cholesterol" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="cholesterol_0">Normal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="cholesterol_1" name="cholesterol" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="cholesterol_1">Yüksek</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 7 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Karaciğer yağlanmanız var mı ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="steatorrhoeic_hepatosis_0" name="steatorrhoeic_hepatosis" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="steatorrhoeic_hepatosis_0">Yok</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="steatorrhoeic_hepatosis_1" name="steatorrhoeic_hepatosis" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="steatorrhoeic_hepatosis_1">1-2 düzeyde var</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="steatorrhoeic_hepatosis_2" name="steatorrhoeic_hepatosis" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="steatorrhoeic_hepatosis_2">Var, ALT-AST seviyeleri yüksek</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />


                    {/* 8 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">CRP düzeyiniz nasıl ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="inflammation_0" name="inflammation" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="inflammation_0">Normal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="inflammation_1" name="inflammation" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="inflammation_1">Yüksek</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 9 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Göbek çevresi ve boy oranı ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="rate_0" name="rate" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="rate_0">0.50-0.55</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="rate_1" name="rate" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="rate_1">0.56-0.75</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="rate_2" name="rate" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="rate_2">0.76-1.00</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 10 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Hipertansiyon düzeyiniz nedir ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="hypertension_0" name="hypertension" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="hypertension_0">Normal tansiyon "12/7"</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="hypertension_1" name="hypertension" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="hypertension_1">Hafif yüksek tansiyon "13/8"</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="hypertension_2" name="hypertension" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="hypertension_2">Yüksek tansiyon "14/9 ve üstü"</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 11 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Günlük hareket düzeyiniz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="movement_0" name="movement" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="movement_0">Hareketsiz "Günde 3000 adım altında"</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="movement_1" name="movement" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="movement_1">Orta hareketli "Günde 3000-6000 adım arasında"</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="movement_2" name="movement" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="movement_2">Hareketli "Günde 6000-10000 adım arasında"</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="movement_3" name="movement" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="movement_3">Çok hareketli "Günde 10000 adım + haftada 2 gün spor"</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 12 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Stres düzeyiniz nedir ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="stres_0" name="stres" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="stres_0">Çok stresli"</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="stres_1" name="stres" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="stres_1">Az stresli</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="stres_2" name="stres" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="stres_2">Çok rahat</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="form-group">
                        <div className="row">
                            <div className="col-12 text-center">
                                <button onClick={handleSubmit} className="btn btn-primary">Koroner Arter Test</button>
                            </div>
                        </div>
                    </div>
           {/* </form> */}
           {localStorage.getItem('currentUser') ? <ShowHearthTest></ShowHearthTest> : ''}
        </div>
    )

}

export default Hearth_Test;