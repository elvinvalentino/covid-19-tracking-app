import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarWeek, faVirus, faPlus, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

const Content = ({ cases }) => {

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var date = cases === undefined ? new Date() : new Date(cases.day);
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var monthDict = {
        1 : "Jan",
        2 : "Feb",
        3 : "Mar",
        4 : "Apr",
        5 : "Mei",
        6 : "Jun",
        7 : "Jul",
        8 : "Agu",
        9 : "Sep",
        10 : "Okt",
        11 : "Nov",
        12 : "Des"
    }

    month = monthDict[month];

    return (
        <div className="content">
            <span><h1>Tanggal : {day + " " + month + " " + year }</h1></span>
            <div className="content-new-cases">
                <span className="content-title">Kasus hari ini :</span>
                <span className="content-num-of-case">
                    {cases === undefined ? '' : formatNumber(cases.cases.new)}
                </span>
                <FontAwesomeIcon icon={faCalendarWeek} />
            </div>
            <div className="content-active">
                <span className="content-title">Total kasus :</span>
                <span className="content-num-of-case">
                    {cases === undefined ? '' : formatNumber(cases.cases.total)}
                </span>
                <FontAwesomeIcon icon={faVirus} />
            </div>
            <div className="content-recovered">
                <span className="content-title">Sembuh :</span>
                <span className="content-num-of-case">
                    {cases === undefined ? '' : formatNumber(cases.cases.recovered)}
                </span>
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="content-deaths">
                <span className="content-title">Meninggal :</span>
                <span className="content-num-of-case">
                    {cases === undefined ? '' : formatNumber(cases.deaths.total)}
                </span>
                <FontAwesomeIcon icon={faSkullCrossbones} />
            </div>
        </div>
    )
}

export default Content;