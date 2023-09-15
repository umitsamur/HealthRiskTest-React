import React, { useState } from "react";
//import {useAuth} from "../../Context/AuthContext";
import ShowRealAge from "./ShowRealAge";

function RealAge() {

    //const {user} = useAuth();

    //const [result, setResult] = useState(0);

    const [realAgeForm, setRealAgeForm] = useState({
        education:'',
        disease:'',
        smoke:'',
        alcohol:'',
        movement:'',
        sleep:'',
        relationship:'',
        life:'',
        mental:'',
        friend:'',
        check_up:'',
        teeth:'',
        tension:'',
        bloodsugar:'',
        cholesterol:'',
        weight:'',
        meat:'',
        fruit:'',
        water:'',
        nuts:'',
        artificial_nourishment:''
    });

    const handleChange = (event) => {
        setRealAgeForm({...realAgeForm, [event.target.name]:event.target.value});
    }

    /*
    const saveRealAgeForm = () => {
        fetch("/real_age")
    }*/

    /*
    const [educationValue, setEducationValue] = useState("");
    const [diseaseValue, setDiseaseValue] = useState("");
    const [smokeValue, setSmokeValue] = useState("");
    const [alcoholValue, setAlcoholValue] = useState("");
    const [movementValue, setMovementValue] = useState("");
    const [sleepValue, setSleepValue] = useState("");
    const [relationshipValue, setRelationshipValue] = useState("");
    const [lifeValue, setLifeValue] = useState("");
    const [mentalValue, setMentalValue] = useState("");
    const [friendValue, setFriendValue] = useState("");
    const [checkUpValue, setCheckUpValue] = useState("");
    const [teethValue, setTeethValue] = useState("");
    const [tensionValue, setTensionValue] = useState("");
    const [bloodsugarValue, setBloodsugarValue] = useState("");
    const [cholesterolValue, setCholesterolValue] = useState("");
    const [weightValue, setWeightValue] = useState("");
    const [meatValue, setMeatValue] = useState("");
    const [fruitValue, setFruitValue] = useState("");
    const [waterValue, setWaterValue] = useState("");
    const [nutsValue, setNutsValue] = useState("");
    const [artificialNourishmentValue, setArtificialNourishmentValue] = useState("");

    const handleEducationChange = (e) => {
        setEducationValue(e.target.value);
    }
    

    const handleDiseaseChange = (e) => {
        setDiseaseValue(e.target.value);
    }
    const handleSmokeChange = (e) => {
        setSmokeValue(e.target.value);
    }
    const handleAlcoholChange = (e) => {
        setAlcoholValue(e.target.value);
    }
    const handleMovementChange = (e) => {
        setMovementValue(e.target.value);
    }
    const handleSleepChange = (e) => {
        setSleepValue(e.target.value);
    }
    const handleRelationshipChange = (e) => {
        setRelationshipValue(e.target.value);
    }
    const handleLifeChange = (e) => {
        setLifeValue(e.target.value);
    }
    const handleMentalChange = (e) => {
        setMentalValue(e.target.value);
    }
    const handleFriendChange = (e) => {
        setFriendValue(e.target.value);
    }
    const handleCheckUpChange = (e) => {
        setCheckUpValue(e.target.value);
    }
    const handleTeethChange = (e) => {
        setTeethValue(e.target.value);
    }
    const handleTensionChange = (e) => {
        setTensionValue(e.target.value);
    }
    const handleBloodsugarChange = (e) => {
        setBloodsugarValue(e.target.value);
    }
    const handleCholesterolChange = (e) => {
        setCholesterolValue(e.target.value);
    }
    const handleWeightChange = (e) => {
        setWeightValue(e.target.value);
    }
    const handleMeatChange = (e) => {
        setMeatValue(e.target.value);
    }
    const handleFruitChange = (e) => {
        setFruitValue(e.target.value);
    }
    const handleWaterChange = (e) => {
        setWaterValue(e.target.value);
    }
    const handleNutsChange = (e) => {
        setNutsValue(e.target.value);
    }
    const handleANChange = (e) => {
        setArtificialNourishmentValue(e.target.value);
    }
*/
/*
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/send_age",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                "education":educationValue,
                "disease":diseaseValue,
                "smoke":smokeValue,
                "alcohol":alcoholValue,
                "movement":movementValue,
                "sleep":sleepValue,
                "relationship":relationshipValue,
                "life":lifeValue,
                "mental":mentalValue,
                "friend":friendValue,
                "check_up":checkUpValue,
                "teeth":teethValue,
                "tension":tensionValue,
                "bloodsugar":bloodsugarValue,
                "cholesterol":cholesterolValue,
                "weight":weightValue,
                "meat":meatValue,
                "fruit":fruitValue,
                "water":waterValue,
                "nuts":nutsValue,
                "artificial_nourishment":artificialNourishmentValue
            }),
        })
        .then((res) =>{res.json(); console.log(res); })
        .then((result) => console.log("result: "+result))
        .catch((err) => console.log(err));

        
        fetch("/sendback_age",{
            method:"GET",
        })
        .then((response) => response.json())
        .then((data) => setResult(data));
        
    }*/
/*
    useEffect(() => {
        fetch("/sendback_age",{
            method:"GET",
            
        })
        .then((response) => response.json())
        .then((data) => setResult(data));
    }, [])
*/

    

    const handleSubmit = () => {
        //event.preventDefault();
        if(localStorage.getItem("currentUser")){
            const token = localStorage.getItem("tokenKey");
            console.log('user: ' + localStorage.getItem("email") + ", id: "+ localStorage.getItem("currentUser"));
            fetch("/real_age",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':token,
                },
                body:JSON.stringify({
                    userId:localStorage.getItem("currentUser"),
                    education:realAgeForm.education,
                    disease:realAgeForm.disease,
                    smoke:realAgeForm.smoke,
                    alcohol:realAgeForm.alcohol,
                    movement:realAgeForm.movement,
                    sleep:realAgeForm.sleep,
                    relationship:realAgeForm.relationship,
                    life:realAgeForm.life,
                    mental:realAgeForm.mental,
                    friend:realAgeForm.friend,
                    check_up:realAgeForm.check_up,
                    teeth:realAgeForm.teeth,
                    tension:realAgeForm.tension,
                    bloodsugar:realAgeForm.bloodsugar,
                    cholesterol:realAgeForm.cholesterol,
                    weight:realAgeForm.weight,
                    meat:realAgeForm.meat,
                    fruit:realAgeForm.fruit,
                    water:realAgeForm.water,
                    nuts:realAgeForm.nuts,
                    artificial_nourishment:realAgeForm.artificial_nourishment
                })
            })
            .then(res => {
                res.json();
                if(res.ok){
                    alert("başarıyla kaydedildi. ");
                }else{
                    alert("bir şeyler yanlış gitti");
                }
            })
            .catch(err => console.log(err));
        }
    }
/*
    const getResult= () => {
        fetch("/real_age?userId="+localStorage.getItem("currentUser"),{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':localStorage.getItem("tokenKey"),
            }
        })
        .then(res => res.json())
        .then(data => {console.log(data); setResult(data)})
        .catch(err => console.log(err));
    }*/

    return (
        <div className="container">
            {/*<form action="" className="" method="">*/}
                    {/* 1 education*/ }
                    <div className="form-group mt-5">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Eğitim durumunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="education_0" name="education" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="education_0">İlk - Orta</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="education_1" name="education" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="education_1">Lise</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="education_2" name="education" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="education_2">Üniversite</label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 2 disease*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Ailenizde ( Anne-Baba, Büyükanne-Baba ) koroner kalp hastalığı veya Kanser var mı ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="disease_0" name="disease" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="disease_0">Var</label><br />
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="disease_1" name="disease" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="disease_1">Yok</label><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 3 smoke*/}
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
                                    <label className="form-check-label" htmlFor="smoke_2">Günde 10-20 tane</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="smoke_3" name="smoke" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="smoke_3">Günde 20 taneden fazla</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 4 alcohol*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Alkol kullanıyor musunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="alcohol_0" name="alcohol" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="alcohol_0">Hiç kullanmam</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="alcohol_1" name="alcohol" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="alcohol_1">Haftada 1-2 gün, 1 kadeh</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="alcohol_2" name="alcohol" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="alcohol_2">Hergün 1-2 kadeh</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="alcohol_3" name="alcohol" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="alcohol_3">Günde 2 den fazla</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 5 movement*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Hareket aktivite</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="movement_0" name="movement" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="movement_0">Hareketsiz bir yaşam</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="movement_1" name="movement" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="movement_1">Normal günlük hareketler</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="movement_2" name="movement" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="movement_2">Hareketli bir yaşam</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="movement_3" name="movement" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="movement_3">Düzenli yürüyüş - spor yaparım</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 6 sleep */}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Uyku düzeniniz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="sleep_0" name="sleep" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="sleep_0">Günde 4 saatten az</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="sleep_1" name="sleep" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="sleep_1">Günde 4-6 saat</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="sleep_2" name="sleep" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="sleep_2">Günde 6-8 saat</label>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 7 relationship*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">İlişki durumunuz</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="relationship_0" name="relationship" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="relationship_0">Bekarım - Yalnızım</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="relationship_1" name="relationship" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="relationship_1">Mutsuz bir ilişki </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="relationship_2" name="relationship" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="relationship_2">Eh işte</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="relationship_3" name="relationship" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="relationship_3">Mutlu bir ilişki</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="relationship_4" name="relationship" value="4" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="relationship_4">Çok mutlu bir ilişki</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 8 life-3*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Meslek - İş hayatınız</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="life_0" name="life" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="life_0">Mutsuz</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="life_1" name="life" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="life_1">Eh işte</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="life_2" name="life" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="life_2">Mutlu </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="life_3" name="life" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="life_3">Çok mutlu</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 9 mental-3*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Stres / Sinir / Endişe</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="mental_0" name="mental" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="mental_0">Hiç </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="mental_1" name="mental" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="mental_1">Arada sırada</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="mental_2" name="mental" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="mental_2">Sık sık </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="mental_3" name="mental" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="mental_3">Her zaman</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 10 friend-2*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Her konuda güvenebileceğiniz kaç dostunuz var ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="friend_0" name="friend" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="friend_0">Yok</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="friend_1" name="friend" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="friend_1">1-2</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="friend_2" name="friend" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="friend_2">Çok</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 11 check_up-1*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Düzenli olarak (yılda 1 kez) check-up yaptırıyor musunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="check_up_0" name="check_up" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="check_up_0">Hayır</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="check_up_1" name="check_up" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="check_up_1">Evet</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 12 teeth-1*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Düzenli olarak Diş kontrolü ve tedavisi yaptırıyor musunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="teeth_0" name="teeth" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="teeth_0">Hayır</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="teeth_1" name="teeth" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="teeth_1">Evet</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 13 tension-4*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Tansiyonunuz ne alemde ? (ilaç kullanmaksızın)</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="tension_0" name="tension" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="tension_0">Baktırmıyorum</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="tension_1" name="tension" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="tension_1">100 / 60</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="tension_2" name="tension" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="tension_2">120 / 70</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="tension_3" name="tension" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="tension_3">140 / 80</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="tension_4" name="tension" value="4" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="tension_4">Daha yüksek</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 14 bloodsugar-2*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Kan Şekeriniz ne alemde ? (ilaç kullanmaksızın)</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="bloodsugar_0" name="bloodsugar" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="bloodsugar_0">Normal</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="bloodsugar_1" name="bloodsugar" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="bloodsugar_1">Biraz Yüksek</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="bloodsugar_2" name="bloodsugar" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="bloodsugar_2">Şeker Hastalığı</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 15 cholesterol-2*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Kolesterolünüz (özellikle kötü kolesterol- LDL) ne alemde ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="cholesterol_0" name="cholesterol" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="cholesterol_0">Normal</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="cholesterol_1" name="cholesterol" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="cholesterol_1">Biraz Yüksek</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="cholesterol_2" name="cholesterol" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="cholesterol_2">Çok Yüksek</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 16 weight-4*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Kilo durumunuz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="weight_0" name="weight" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="weight_0">Zayıfım </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="weight_1" name="weight" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="weight_1">Normal kilodayım</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="weight_2" name="weight" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="weight_2">Kilo fazlam var</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="weight_3" name="weight" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="weight_3">Şişman sayılırım</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="weight_4" name="weight" value="4" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="weight_4">Çok şişmanım</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 17 meat-3*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Et Tüketiminiz (Tavuk ve Balık dahil)</p> <p className="text-end fw-normal">( 1 pors. : 150 gr )</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="meat_0" name="meat" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="meat_0">Vejeteryan</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="meat_1" name="meat" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="meat_1">Haftada 1-2 gün, 1 porsiyon</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="meat_2" name="meat" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="meat_2">Her gün 1 porsiyon kadar </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="meat_3" name="meat" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="meat_3">Her gün 1 porsiyondan fazla</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 18 fruit-3*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Günde kaç porsiyon meyve / sebze / salata yersiniz ?</p> <p className="text-end fw-normal">( 1 pors. : 150 gr )</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="fruit_0" name="fruit" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="fruit_0">Çok az, bazen hiç</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="fruit_1" name="fruit" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="fruit_1">1 porsiyon</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="fruit_2" name="fruit" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="fruit_2">2-4 porsiyon </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="fruit_3" name="fruit" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="fruit_3">5-7 porsiyon</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 19 water-3*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Günde kaç bardak ( 1 bardak : 200 ml ) saf su içersiniz ?</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="water_0" name="water" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="water_0">Hiç içmem, çay-kahve-gazoz içerim</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="water_1" name="water" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="water_1">1-2 bardak</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="water_2" name="water" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="water_2">3-5 bardak</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="water_3" name="water" value="3" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="water_3">6-8 bardak </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 20 nuts-2*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Kuru yemiş yer misiniz ?</p> <p className="text-end fw-normal"> ( Ceviz, Badem, Fındık )</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="nuts_0" name="nuts" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="nuts_0">Hiç veya çok az</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="nuts_1" name="nuts" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="nuts_1">Haftada 1-2 kez 50 gr. kadar</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="nuts_2" name="nuts" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="nuts_2">Her gün 50 gr. kadar yerim</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* 21 artificial_nourishment-2*/}
                    <div className="form-group mt-2">
                        <div className="row">
                            <div className="col-6">
                                <p className="text-end fw-bold">Suni Gıda tüketiminiz ?</p> <p className="text-end fw-normal"> ( suni tatlandırıcılar, kolalı meşrubatlar, hazır gıda ve tatlılar )</p>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="artificial_nourishment_0" name="artificial_nourishment" value="0" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="artificial_nourishment_0">Ağzıma koymam</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="artificial_nourishment_1" name="artificial_nourishment" value="1" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="artificial_nourishment_1">Çok az - haftada 1-2 kez</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="artificial_nourishment_2" name="artificial_nourishment" value="2" onChange={handleChange}></input>
                                    <label className="form-check-label" htmlFor="artificial_nourishment_2">Her gün birkaçını kullanırım</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="form-group">
                        <div className="row">
                            <div className="col-12 text-center">
                                <button onClick={ handleSubmit} className="btn btn-primary">Yaş Test</button>
                            </div>
                        </div>
                    </div>
{/*
                    <div className="form-group">
                        <div className="row">
                            <div className="col-12 text-center">
                                <button onClick={() => getResult} className="btn btn-primary">Result</button>
                            </div>
                        </div>
                    </div>
*/}
            {/*</form>*/}
            {localStorage.getItem('currentUser') ? <ShowRealAge></ShowRealAge> : ''}
           
        </div>
    )
}

export default RealAge;