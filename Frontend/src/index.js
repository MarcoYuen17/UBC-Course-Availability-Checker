import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
    render() {
        return <h1>UBC Course Availability Checker</h1>
    }
}

class Main extends React.Component {
    render() {
        return (
            <form method='post' action=''>
                <label for='code'>Course Code:</label>
                <input list='code' name='code' required/>
                    <datalist id='code'>                    {/*TODO: find a way to shorten if possible*/}
                        <option value='AANB'/>
                        <option value='ACAM'/>
                        <option value='ADHE'/>
                        <option value='AFST'/>
                        <option value='AGEC'/>
                        <option value='ANAT'/>
                        <option value='ANTH'/>
                        <option value='APBI'/>
                        <option value='APPP'/>
                        <option value='APSC'/>
                        <option value='AQUA'/>
                        <option value='ARBC'/>
                        <option value='ARBM'/>
                        <option value='ARC'/>
                        <option value='ARCH'/>
                        <option value='ARCL'/>
                        <option value='ARST'/>
                        <option value='ARTC'/>
                        <option value='ARTH'/>
                        <option value='ARTS'/>
                        <option value='ASIA'/>
                        <option value='ASIC'/>
                        <option value='ASL'/>
                        <option value='ASLA'/>
                        <option value='ASTR'/>
                        <option value='ASTU'/>
                        <option value='ATSC'/>
                        <option value='AUDI'/>
                        <option value='BA'/>
                        <option value='BAAC'/>
                        <option value='BABS'/>
                        <option value='BAEN'/>
                        <option value='BAFI'/>
                        <option value='BAHC'/>
                        <option value='BAHR'/>
                        <option value='BAIM'/>
                        <option value='BAIT'/>
                        <option value='BALA'/>
                        <option value='BAMA'/>
                        <option value='BAMS'/>
                        <option value='BAPA'/>
                        <option value='BASC'/>
                        <option value='BASD'/>
                        <option value='BASM'/>
                        <option value='BATL'/>
                        <option value='BAUL'/>
                        <option value='BEST'/>
                        <option value='BIOC'/>
                        <option value='BIOF'/>
                        <option value='BIOL'/>
                        <option value='BIOT'/>
                        <option value='BMEG'/>
                        <option value='BOTA'/>
                        <option value='BRDG'/>
                        <option value='BUSI'/>
                        <option value='CAPS'/>
                        <option value='CCFI'/>
                        <option value='CCST'/>
                        <option value='CDST'/>
                        <option value='CEEN'/>
                        <option value='CELL'/>
                        <option value='CENS'/>
                        <option value='CHBE'/>
                        <option value='CHEM'/>
                        <option value='CHIL'/>
                        <option value='CHIN'/>
                        <option value='CIVL'/>
                        <option value='CLST'/>
                        <option value='CNPS'/>
                        <option value='CNRS'/>
                        <option value='CNTO'/>
                        <option value='COEC'/>
                        <option value='COGS'/>
                        <option value='COHR'/>
                        <option value='COLX'/>
                        <option value='COMM'/>
                        <option value='COMR'/>
                        <option value='CONS'/>
                        <option value='CPEN'/>
                        <option value='CPSC'/>
                        <option value='CRWR'/>
                        <option value='CSIS'/>
                        <option value='CSPW'/>
                        <option value='CTLN'/>
                        <option value='DANI'/>
                        <option value='DENT'/>
                        <option value='DES'/>
                        <option value='DHYG'/>
                        <option value='DMED'/>
                        <option value='DSCI'/>
                        <option value='ECED'/>
                        <option value='ECON'/>
                        <option value='ECPS'/>
                        <option value='EDCP'/>
                        <option value='EDST'/>
                        <option value='EDUC'/>
                        <option value='EECE'/>
                        <option value='ELEC'/>
                        <option value='ELI'/>
                        <option value='EMBA'/>
                        <option value='ENDS'/>
                        <option value='ENGL'/>
                        <option value='ENPH'/>
                        <option value='ENPP'/>
                        <option value='ENVE'/>
                        <option value='ENVR'/>
                        <option value='EOSC'/>
                        <option value='EPSE'/>
                        <option value='ETEC'/>
                        <option value='EXCH'/>
                        <option value='EXGR'/>
                        <option value='FACT'/>
                        <option value='FCOR'/>
                        <option value='FEBC'/>
                        <option value='FHIS'/>
                        <option value='FIPR'/>
                        <option value='FISH'/>
                        <option value='FIST'/>
                        <option value='FMPR'/>
                        <option value='FMST'/>
                        <option value='FNEL'/>
                        <option value='FNH'/>
                        <option value='FNIS'/>
                        <option value='FOOD'/>
                        <option value='FOPR'/>
                        <option value='FRE'/>
                        <option value='FREN'/>
                        <option value='FRSI'/>
                        <option value='FRST'/>
                        <option value='FSCT'/>
                        <option value='GBPR'/>
                        <option value='GEM'/>
                        <option value='GENE'/>
                        <option value='GEOB'/>
                        <option value='GEOG'/>
                        <option value='GERM'/>
                        <option value='GREK'/>
                        <option value='GRS'/>
                        <option value='GRSJ'/>
                        <option value='GSAT'/>
                        <option value='HEBR'/>
                        <option value='HESO'/>
                        <option value='HGSE'/>
                        <option value='HINU'/>
                        <option value='HIST'/>
                        <option value='HPB'/>
                        <option value='HUNU'/>
                        <option value='IAR'/>
                        <option value='IEST'/>
                        <option value='IGEN'/>
                        <option value='INDO'/>
                        <option value='INDS'/>
                        <option value='INFO'/>
                        <option value='INLB'/>
                        <option value='ISCI'/>
                        <option value='ITAL'/>
                        <option value='ITST'/>
                        <option value='IWME'/>
                        <option value='JAPN'/>
                        <option value='JRNL'/>
                        <option value='KIN'/>
                        <option value='KORN'/>
                        <option value='LAIS'/>
                        <option value='LARC'/>
                        <option value='LASO'/>
                        <option value='LAST'/>
                        <option value='LATN'/>
                        <option value='LAW'/>
                        <option value='LFS'/>
                        <option value='LIBE'/>
                        <option value='LIBR'/>
                        <option value='LING'/>
                        <option value='LLED'/>
                        <option value='LWS'/>
                        <option value='MANU'/>
                        <option value='MATH'/>
                        <option value='MDVL'/>
                        <option value='MECH'/>
                        <option value='MEDD'/>
                        <option value='MEDG'/>
                        <option value='MEDI'/>
                        <option value='MES'/>
                        <option value='MGMT'/>
                        <option value='MICB'/>
                        <option value='MIDW'/>
                        <option value='MINE'/>
                        <option value='MRNE'/>
                        <option value='MTRL'/>
                        <option value='MUSC'/>
                        <option value='NAME'/>
                        <option value='NEPL'/>
                        <option value='NEST'/>
                        <option value='NEUR'/>
                        <option value='NRSC'/>
                        <option value='NURS'/>
                        <option value='OBMS'/>
                        <option value='OBST'/>
                        <option value='OHS'/>
                        <option value='ONCO'/>
                        <option value='ORNT'/>
                        <option value='ORPA'/>
                        <option value='OSOT'/>
                        <option value='PATH'/>
                        <option value='PCTH'/>
                        <option value='PERS'/>
                        <option value='PHAR'/>
                        <option value='PHIL'/>
                        <option value='PHRM'/>
                        <option value='PHTH'/>
                        <option value='PHYL'/>
                        <option value='PHYS'/>
                        <option value='PLAN'/>
                        <option value='PLAS'/>
                        <option value='PLNT'/>
                        <option value='POLI'/>
                        <option value='POLS'/>
                        <option value='PORT'/>
                        <option value='PPGA'/>
                        <option value='PRHC'/>
                        <option value='PSYC'/>
                        <option value='PSYT'/>
                        <option value='PUNJ'/>
                        <option value='RADI'/>
                        <option value='RADS'/>
                        <option value='RELG'/>
                        <option value='RES'/>
                        <option value='RGLA'/>
                        <option value='RGST'/>
                        <option value='RHSC'/>
                        <option value='RMST'/>
                        <option value='RUSS'/>
                        <option value='SANS'/>
                        <option value='SCAN'/>
                        <option value='SCIE'/>
                        <option value='SEAL'/>
                        <option value='SGES'/>
                        <option value='SLAV'/>
                        <option value='SOAL'/>
                        <option value='SOCI'/>
                        <option value='SOIL'/>
                        <option value='SOWK'/>
                        <option value='SPAN'/>
                        <option value='SPE'/>
                        <option value='SPHA'/>
                        <option value='SPPH'/>
                        <option value='STAT'/>
                        <option value='STS'/>
                        <option value='SURG'/>
                        <option value='SWED'/>
                        <option value='THFL'/>
                        <option value='THTR'/>
                        <option value='TIBT'/>
                        <option value='TRSC'/>
                        <option value='UDES'/>
                        <option value='UFOR'/>
                        <option value='UKRN'/>
                        <option value='UROL'/>
                        <option value='URST'/>
                        <option value='URSY'/>
                        <option value='VANT'/>
                        <option value='VGRD'/>
                        <option value='VISA'/>
                        <option value='VRHC'/>
                        <option value='VURS'/>
                        <option value='WOOD'/>
                        <option value='WRDS'/>
                        <option value='WRIT'/>
                        <option value='ZOOL'/>
                    </datalist>
                <label for='id'>Course ID:</label>
                <input type='text' name='id' id='id' required/>
                <label for='section'>Section:</label>
                <input type='text' name='section' id='section' required/>
                <label for='seatType'>Seat Type:</label>
                <input list='seatType' name='seatType' required/>
                <datalist id='seatType'>
                    <option value='General'/>
                    <option value='Total'/>
                    <option value='Restricted'/>
                </datalist>
                <input type='submit' value='Submit'></input>
            </form>
        )
    }
}

class All extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

ReactDOM.render(
    <All />,
    document.getElementById('root')
);