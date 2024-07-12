import React from 'react'

export default function Gold({data}) {
     return (
          <div className="section">
               <div className="box-more">
                    <div className="box-more-data d-flex justify-content-between">
                         <div className="box-more-image">
                              <img src={data.image} alt="" />
                         </div>
                         <div className="box-more-table">
                              <table border="0" cellPadding='0' cellSpacing='0' width='100%'>
                                   <thead>
                                        <tr>
                                             <th>Giá vàng</th>
                                             <th>Mua</th>
                                             <th>Bán</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        <tr>
                                             <td>Vàng SJC (triệu đồng/lượng)</td>
                                             <td>{data.SJC_Buy}</td>
                                             <td>{data.SJC_Sold}</td>
                                        </tr>
                                        <tr>
                                             <td>Thế giới (USD/ounce)</td>
                                             <td>{data.USD_Buy}</td>
                                             <td>{data.USD_Sold}</td>
                                        </tr>
                                   </tbody>
                              </table>
                         </div>
                         <div className="box-more-brand">
                              <img src={data.startUp} alt="" />
                              <img src={data.Vhome} alt="" />
                         </div>
                    </div>
               </div>
          </div>
     )
}
