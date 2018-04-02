import React from 'react'
class Cfoot extends React.Component{
	render(){
		return(
			<div className="cy_cfoot">			
				<ul className="cy_cfoot clear">
					<li style={this.cy_footli1}><i className="icon iconfont icon-changyonglogo40"></i><span>外卖</span></li>
					<li style={this.cy_footli2}><i className="icon iconfont icon-xiangqi"></i><span>发现</span></li>
					<li><i className="icon iconfont icon-ziyuan"></i><span>订单</span></li>
					<li><i className="icon iconfont icon-iconfuzhi"></i><span>我的</span></li>
				</ul>
			
			</div>
		)
	}
} 

Cfoot.prototype.cy_footli1={
	color: '#008bff'
}
Cfoot.prototype.cy_footli2={
	color: '#ff2119'
}

export default Cfoot;
