import React from 'react';
import './index.css'


const Check: React.FC = () => {

    return (
        <>
            <nav id="line">
            <ul>
                <li>
                    <a> Check-In </a>
                </li>
                <li>
                    <a>Checkout</a>
            </li>
            </ul>
            </nav>
    <fieldset>
    <table>
    <tbody>
    <tr>
    <td>
                    <select className= 'dia1'>
                    <option data-id="1">01</option>
                    <option data-id="2">02</option>
                    <option data-id="3">03</option>
                    <option data-id="4">04</option>
                    <option data-id="5">05</option>
                    <option data-id="6">06</option>
                    <option data-id="7">07</option>
                    <option data-id="8">08</option>
                    <option data-id="9">09</option>
                    <option data-id="10">10</option>
                    <option data-id="11">11</option>
                    <option data-id="12">12</option>
                    <option data-id="13">13</option>
                    <option data-id="14">14</option>
                    <option data-id="15">15</option>
                    <option data-id="16">16</option>
                    <option data-id="17">17</option>
                    <option data-id="18">18</option>
                    <option data-id="19">19</option>
                    <option data-id="20">20</option>
                    <option data-id="21">21</option>
                    <option data-id="22">22</option>
                    <option data-id="23">23</option>
                    <option data-id="24">24</option>
                    <option data-id="25">25</option>
                    <option data-id="26">26</option>
                    <option data-id="27">27</option>
                    <option data-id="28">28</option>
                    <option data-id="29">29</option>
                    <option data-id="30">30</option>
                    </select>
    </td>
    <td>
                    <select className= 'mes1'>
                    <option mes-id="1">Janeiro</option>
                    <option mes-id="2">Fevereiro</option>
                    <option mes-id="3">Março</option>
                    <option mes-id="4">Abril</option>
                    <option mes-id="5">Maio</option>
                    <option mes-id="6">Junho</option>
                    <option mes-id="7">Julho</option>
                    <option mes-id="8">Agosto</option>
                    <option mes-id="9">Setembro</option>
                    <option mes-id="10">Outubro</option>
                    <option mes-id="11">Novembro</option>
                    <option mes-id="12">Dezembro</option>
                    </select>
    </td>
    <td>
                    <select className= 'ano1'>
                    <option mes-id="1">2021</option>
                    <option mes-id="2">2022</option>
                    <option mes-id="3">2023</option>
                    </select>
    </td>

    <td>
                    <select className= 'dia2'>
                    <option data-id="1">01</option>
                    <option data-id="2">02</option>
                    <option data-id="3">03</option>
                    <option data-id="4">04</option>
                    <option data-id="5">05</option>
                    <option data-id="6">06</option>
                    <option data-id="7">07</option>
                    <option data-id="8">08</option>
                    <option data-id="9">09</option>
                    <option data-id="10">10</option>
                    <option data-id="11">11</option>
                    <option data-id="12">12</option>
                    <option data-id="13">13</option>
                    <option data-id="14">14</option>
                    <option data-id="15">15</option>
                    <option data-id="16">16</option>
                    <option data-id="17">17</option>
                    <option data-id="18">18</option>
                    <option data-id="19">19</option>
                    <option data-id="20">20</option>
                    <option data-id="21">21</option>
                    <option data-id="22">22</option>
                    <option data-id="23">23</option>
                    <option data-id="24">24</option>
                    <option data-id="25">25</option>
                    <option data-id="26">26</option>
                    <option data-id="27">27</option>
                    <option data-id="28">28</option>
                    <option data-id="29">29</option>
                    <option data-id="30">30</option>
                    </select>
    </td>
    <td>
                    <select className= 'mes2'>
                    <option mes-id="1">Janeiro</option>
                    <option mes-id="2">Fevereiro</option>
                    <option mes-id="3">Março</option>
                    <option mes-id="4">Abril</option>
                    <option mes-id="5">Maio</option>
                    <option mes-id="6">Junho</option>
                    <option mes-id="7">Julho</option>
                    <option mes-id="8">Agosto</option>
                    <option mes-id="9">Setembro</option>
                    <option mes-id="10">Outubro</option>
                    <option mes-id="11">Novembro</option>
                    <option mes-id="12">Dezembro</option>
                    </select>
    </td>
    <td>
                    <select className= 'ano2'>
                    <option mes-id="1">2021</option>
                    <option mes-id="2">2022</option>
                    <option mes-id="3">2023</option>
                    </select>
    </td>
    </tr>
    </tbody>
    </table>
    </fieldset>
        </>
    )}
export default Check;