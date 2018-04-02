import React from 'react'

class Recom extends React.Component{
	render(){
		return(
			<div style={this.pad} className="cy_recom">
				<div style={this.cy_jia}>——推荐商家——</div>
				<ul style={this.clear} className="cy_goodslist">
					<li style={this.cynavli}>
						<span>综合排序</span>
						
					</li>
					<li style={this.cynavli}>好评优先</li>
					<li style={this.cynavli}>距离最近</li>
					<li style={this.cynavli}>筛选</li>
				</ul>
				
				<div className="cy_goodslist">
					<ul>
						<li>
							<div className="cy_listtop">
								<div className="cy_listimg">
									<img src="img/c1.webp"/>
								</div>
								<div className="cy_listr">
									<h3>百果园（密渡桥店）</h3>
									<div className="cy_ybug">
										<img src="img/c3.png"/><span>5.0 月售506单</span>
										<span className="fengniao">蜂鸟专送</span>
									</div>
									<div className="cy_pei">
										<span>￥20元起送|配送费￥5</span>
										<span className="time">300m|20分钟</span>
									</div>	
																																					
								</div>
							</div>
							
							<div className="cy_listbot">
								<p><i className="icon iconfont icon-koubei"></i>口碑人气好店</p>
								<div><span style={this.cy_manjian}>满减</span><span>满39减10，满69减25，满99减30</span>
								<i className="icon iconfont icon-xiangxia"></i></div>
								<span style={this.cy_zhekou}>折扣</span><span>美国橙1份不少于450g 8折</span>
							</div>									
												
							
						</li>
						
						<li>
							<div className="cy_listtop">
								<div className="cy_listimg">
									<img src="img/c1.webp"/>
								</div>
								<div className="cy_listr">
									<h3>百果园（密渡桥店）</h3>
									<div className="cy_ybug">
										<img src="img/c3.png"/><span>5.0 月售506单</span>
										<span className="fengniao">蜂鸟专送</span>
									</div>
									<div className="cy_pei">
										<span>￥20元起送|配送费￥5</span>
										<span className="time">300m|20分钟</span>
									</div>	
																																					
								</div>
							</div>
							
							<div className="cy_listbot">
								<p><i className="icon iconfont icon-koubei"></i>口碑人气好店</p>
								<div><span style={this.cy_manjian}>满减</span><span>满39减10，满69减25，满99减30</span>
								<i className="icon iconfont icon-xiangxia"></i></div>
								<span style={this.cy_zhekou}>折扣</span><span>美国橙1份不少于450g 8折</span>
							</div>									
												
							
						</li>
					</ul>
									
				</div>
				
			</div>
		)
	}
}

Recom.prototype.pad={
	padding:'0',
	margin:'0'
}
Recom.prototype.cy_jia={
	textAlign:'center'
}
Recom.prototype.clear={
	content:'',
	display:'block',
	clear:'both',
	overflow:'hidden'
}
Recom.prototype.cynavli={
	float: 'left',
	width: '25%',
	textAlign: 'center',
	listStyle: 'none'
}
Recom.prototype.cy_manjian={
	color: 'red',
	marginRight: '10px'
}
Recom.prototype.cy_zhekou={
	color: 'red',
	marginRight: '10px'
}

export default Recom;
