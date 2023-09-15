import React,{useState} from "react";
import ShowRiskTest from "./ShowRiskTest";


function Home(){

    const [riskTestForm, setRiskTestForm] = useState({
        haveCancer:'',
        smoke:'',
        redmeat:false,
        charcuterie:false,
        animalfats:false,
        fiberfood:false,
        insufficient:false,
        processedfood:false,
        fizzydrink:false,
        artificialsweetener:false,
        weight:0,
        height:0,
        hepatit:false,
        virus:false,
        hpv:false,
        pylori:false,
        alcohol:'',
        stres:'',
        job:'',
        movement:''
    });

    const handleChange = (event) => {
        setRiskTestForm({...riskTestForm, [event.target.name]:event.target.value});
    }
    const handleCheckboxChange =  (event) => {
        setRiskTestForm({...riskTestForm, [event.target.name]:event.target.checked ? true : false});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Movement: "+ riskTestForm.movement + " redmeat: " + riskTestForm.redmeat + " weight: " + riskTestForm.weight + " height: " + riskTestForm.height)
        if (localStorage.getItem('currentUser')) {
            const token = localStorage.getItem('tokenKey');
            fetch("/",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token,
                },
                body:JSON.stringify({...riskTestForm, userId:localStorage.getItem('currentUser')})
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

    return(
        <div className="container">
            {/*localStorage.getItem("currentUser") ? (<div style={{padding:10, border:'1px solid red'}}>{localStorage.getItem("email") + " " + localStorage.getItem("currentUser")} bu alan sadece giriş yapılınca görülür</div>) : (<div></div>)*/}
            {/*<form action="" className="" method="POST" id="">*/}
                
                {/* 1 */}
                    <div className="form-group mt-5">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Ailenizde kanser olan herhangibiri var mı ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="cancer_yes" name="haveCancer" value="1" onChange={handleChange} ></input>
                                    <label className="form-check-label" htmlFor="cancer_yes">Evet</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="cancer_no" name="haveCancer" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="cancer_no">Hayır</label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                <br />
                {/* 2 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Sigara kullanıyor musunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="smoke_yes" name="smoke" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="smoke_yes">Evet</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="smoke_no" name="smoke" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="smoke_no">Hayır</label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                <br />
                {/* 3 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Hangilerini tüketiyorsunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="red_meat" name="redmeat" checked={riskTestForm.redmeat===true} onChange={handleCheckboxChange}></input>
                                    <label className="form-check-label" htmlFor="red_meat">Kırmızı Et</label>
                                </div>
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="charcuterie" name="charcuterie" checked={riskTestForm.charcuterie} onChange={handleCheckboxChange}></input>
                                    <label className="form-check-label" htmlFor="charcuterie">İşlenmiş Etler - Şarküteri</label><br />
                                </div>

                                <div className="w-100"></div>

                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="animal_fats" name="animalfats" checked={riskTestForm.animalfats} onChange={handleCheckboxChange}></input>
                                    <label className="form-check-label" htmlFor="animal_fats">Hayvansal Yağlar</label>
                                </div>
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="fiber_food" name="fiberfood" checked={riskTestForm.fiberfood} onChange={handleCheckboxChange}></input>
                                    <label className="form-check-label" htmlFor="fiber_food">Lifli Gıdalardan Yetersiz Beslenme</label><br />
                                </div>

                                <div className="w-100"></div>

                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="artificial_sweetener" name="artificialsweetener" checked={riskTestForm.artificialsweetener} onChange={handleCheckboxChange}></input>
                                    <label className="form-check-label" htmlFor="artificial_sweetener">Suni tatlandırıcılar</label><br />
                                </div>
                                
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="processed_food" name="processedfood" checked={riskTestForm.processedfood} onChange={handleCheckboxChange}></input>
                                    <label className="form-check-label" htmlFor="processed_food">İşlenmiş, Suni Gıdalarla Beslenme</label><br />
                                </div>

                                <div className="w-100"></div>

                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="fizzy_drink" name="fizzydrink" checked={riskTestForm.fizzydrink} onChange={handleCheckboxChange}></input>
                                    <label className="form-check-label" htmlFor="fizzy_drink">Şekerli Meşrubatlar</label>
                                </div>
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="insufficient" name="insufficient" checked={riskTestForm.insufficient} onChange={handleCheckboxChange}></input>
                                    <label className="form-check-label" htmlFor="insufficient">Meyve, Sebze Yetersiz Beslenme</label>
                                </div>

                            </div>
                        </div>
                    </div>
                <br />
                {/* 4 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Kilonuz ve boyunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="col-5 form-check-inline">
                                    <input type="textbox" name="weight" id="" className="form-control" placeholder="Kilonuz (Örn. 65)" onChange={handleChange}/>
                                </div>
                                <div className="col-5 form-check-inline">
                                    <input type="textbox" name="height" id="" className="form-control" placeholder="Boyunuz (Örn. 175)" onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                <br />


                {/* 5 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Hangilerine sahipsiniz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="hepatit" id="hepatit" checked={riskTestForm.hepatit} onChange={handleCheckboxChange}/>
                                    <label className="form-check-label" htmlFor="hepatit">Hepatit B and C</label>
                                </div>
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="virus" id="virus" checked={riskTestForm.virus} onChange={handleCheckboxChange}/>
                                    <label className="form-check-label" htmlFor="virus">Herpes Virus</label>
                                </div>

                                <div className="w-100"></div>

                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="hpv" id="hpv" checked={riskTestForm.hpv} onChange={handleCheckboxChange}/>
                                    <label className="form-check-label" htmlFor="hpv">HPV</label>
                                </div>
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="pylori" id="pylori" checked={riskTestForm.pylori} onChange={handleCheckboxChange}/>
                                    <label className="form-check-label" htmlFor="pylori">Helicobacter Pylori</label>
                                </div>
                            </div>
                        </div>
                    </div>
                <br />


                {/* 6 */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Alkol kullanıyor musunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="drink_no" name="alcohol" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="drink_no">Hayır</label><br />
                                </div>
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="drink_1" name="alcohol" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="drink_1">Haftada 1 kez 2 kadeh</label><br />
                                </div>
                                <div className="w-100"></div>
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="drink_2" name="alcohol" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="drink_2">Haftada 2 kez 2 kadeh</label><br />
                                </div>
                                <div className="col-5 form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="drink_3" name="alcohol" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="drink_3">Hergün 1-2 kadeh</label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                <br />

                {/* 7 */}

                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Normal hayatınızda stresli misiniz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="stress_yes" name="stres" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="stress_yes">Evet</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="stress_no" name="stres" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="stress_no">Hayır</label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                <br />

                {/* 8 */}

                <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Petrokimya, kimya, plastik veya boya sanayisi gibi bir endüstride mi çalışıyorsunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="job_yes" name="job" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="job_yes">Evet</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="job_no" name="job" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="job_no">Hayır</label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                <br />

                {/* 8 */}

                <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Gündelik hayatınızda çok hareket eder misiniz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="movement_yes" name="movement" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="movement_yes">Evet</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="movement_no" name="movement" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="movement_no">Hayır</label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                <br />

                    <div className="form-group">
                        <div className="row">
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Risk Hesapla</button>
                            </div>
                        </div>
                    </div>
              
            {/*</form>*/}
            {localStorage.getItem('currentUser') ? <ShowRiskTest></ShowRiskTest> : ''}
        </div>
    )
}

export default Home;