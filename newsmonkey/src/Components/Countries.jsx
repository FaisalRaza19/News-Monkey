import React from 'react'

const Countries = () => {
    return (
        <div>
            <div className="dropdown" >
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Country
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ overflowY: "scroll", padding: "0px 13%", maxHeight: "70vh" }}>
                    <li value={"ar"}>Argentina</li>
                    <li value={"gr"}>Greece</li>
                    <li value={"nl"}>NetherLand</li>
                    <li value={"za"}>South Africa</li>
                    <li value={"au"}>Australia</li>
                    <li value={"hk"}>Hong Kong</li>
                    <li value={"nz"}>New Zealand</li>
                    <li value={"kr"}>South Korea</li>
                    <li value={"at"}>Austria</li>
                    <li value={"hu"}>Hungary</li>
                    <li value={"ng"}>Nigeria</li>
                    <li value={"se"}>Sweden</li>
                    <li value={"be"}>Belgiun</li>
                    <li value={"in"}>India</li>
                    <li value={"no"}>Norway</li>
                    <li value={"ch"}>SwitzerLand</li>
                    <li value={"br"}>Brazil</li>
                    <li value={"id"}>Indonesia</li>
                    <li value={"ph"}>Philippines</li>
                    <li value={"tw"}>Taiwan</li>
                    <li value={"bg"}>Bulgaria</li>
                    <li value={"ie"}>Ireland</li>
                    <li value={"pl"}>Poland</li>
                    <li value={"th"}>Thailand</li>
                    <li value={"ca"}>Canada</li>
                    <li value={"pt"}>Portugal</li>
                    <li value={"tr"}>Turkey</li>
                    <li value={"cn"}>China</li>
                    <li value={"it"}>Italy</li>
                    <li value={"ro"}>Romania</li>
                    <li value={"ae"}>UAE</li>
                    <li value={"co"}>Colombia</li>
                    <li value={"jp"}>Japan</li>
                    <li value={"ru"}>Russia</li>
                    <li value={"ua"}>Ukraine</li>
                    <li value={"cu"}>Cuba</li>
                    <li value={"lv"}>Latvia</li>
                    <li value={"sa"}>Saudia Arabia</li>
                    <li value={"gb"}>United Kingdom</li>
                    <li value={"cz"}>Czech Republic</li>
                    <li value={"lt"}>Lithuania</li>
                    <li value={"rs"}>Serbia</li>
                    <li value={"us"}>United State</li>
                    <li value={"eg"}>Egypt</li>
                    <li value={"my"}>Malaysia</li>
                    <li value={"sg"}>Singapore</li>
                    <li value={"ve"}>Venuzuela</li>
                    <li value={"fr"}>France</li>
                    <li value={"mx"}>Mexico</li>
                    <li value={"sk"}>Slovakia</li>
                    <li value={"de"}>Germany</li>
                    <li value={"ma"}>Morocco</li>
                    <li value={"si"}>Slovenia</li>
                </ul>
            </div>
        </div>
    )
}

export default Countries