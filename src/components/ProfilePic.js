import React, { Component } from "react";

export default class ProfilePic extends Component {
	constructor(props) {
		super(props);

		this.state = {
			imgurl: "/assets/images/blankprofilepic.jpg",
		};

		this.updateImage = this.updateImage.bind(this);
		this.changeImage = this.changeImage.bind(this);
	}

	updateImage() {
		document.getElementById("my_file").click();
	}

	changeImage(e) {
		const file = e.target.files[0];
		const pic = URL.createObjectURL(file);
		this.setState({
			imgurl: pic
		})
	}

	render() {
		return (
			<>
				<input
					type="image"
					onClick={this.updateImage}
					src={this.state.imgurl}
					alt="Profile"
				/>
				<input onChange={this.changeImage} type="file" id="my_file"  accept="image/png, image/jpeg"/>
			</>
		);
	}
}
