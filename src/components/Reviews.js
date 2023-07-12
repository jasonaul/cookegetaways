import React from 'react';
import './Reviews.css';
import star from '../images/star.png'; // replace this with the path to your star image

// Sample reviews data
const reviews = [
    {
        reviewer: "Samantha",
        rating: 5,
        title: "Would Definitely Go Back",
        review: "Stacie, Angel and team were very nice and extremely responsive. We thought the house was better than the pictures and would definitely go back!",
        date: "January 2023"
    },
    {
        reviewer: "Kenneth",
        rating: 5,
        title: "Location is Fantastic",
        review: "This house is fantastic! We have rented similar size properties in Oregon and in Idaho and Stacie's home is a level above. The house is beautiful and the location is fantastic. It is quiet and peaceful yet very close to town. We saw deer in the front yard and wild turkey with chicks as well. The field in front of the house was filled with wildflowers on our arrival. We had room for friends and family and for guest as well. Washers and dryers upstairs and down were very helpful. The Kitchen is excellent and very well equipped with cookware, cutlery etc. I thought we would eat out more but we wound up cooking more nights than we went out. If you are a light sensitive sleeper you may want to bring an eye mask. It gets daylight early in summer. The owner is the perfect host and was readily accessible and responded promptly to questions.",
        date: "August 2022"
    },
    {
        reviewer: "Kelly",
        rating: 5,
        title: "Very Peacefull",
        review: "The house is beautiful and views are amazing. Very peaceful stay.",
        date: "July 2022"
    },
    {
        reviewer: "Jessica",
        rating: 5,
        title: "Exceeded All Expectations",
        review: "A wonderful stay in an exquisite home. Beautiful views, the most comfortable beds, incredibly well equipped kitchen, excellent communication throughout our trip. It really exceeded all expectations. We would love to return.",
        date: "August 2022"
    },
    {
        reviewer: "Adele",
        rating: 5,
        title: "Beutifully Designed Modern House",
        review: "This is a beautifully designed modern house - --and works well for a crowd- --Nine of us including a couple of teenagers and we all had private space as well as beautiful open common space. The game room is the perfect antidote to slushy slopes. House location offers spectacular views and close access to Stowe Village and skiing. If you are cooking, the kitchen is well appointed and equipped. There are no negatives here.",
        date: "February 2022"
    },
    {
        reviewer: "Neha",
        rating: 5,
        title: "Cannot recommend enough!",
        review: "What a great home! The views were beautiful - and the location was perfect. Close enough to town but remote enough to feel like we had the entire area to ourselves. The place was well laid out - super spacious for large groups - with a beautiful open space upstairs and great TV room downstairs. Overall super high end in terms of the quality and cleanliness - the beds and bedding were very comfortable / plush and the kitchen was amazingly outfitted (high end appliances too)! Cannot recommend enough!!",
        date: "January 2022"
    },
    // add more reviews here
];

const Reviews = () => (
    <div className="reviews-container">
        {reviews.map((review, index) => (
            <div key={index} className="review-box">
                <div className="review-header">
                    <div className="reviewer-name">{review.reviewer}</div>
                    <div className="review-stars">
                        {[...Array(review.rating)].map((e, i) => <img key={i} src={star} alt="star" className="star" />)}
                    </div>
                </div>
                <h2 className="review-title">{review.title}</h2>
                <p className="review-text">{review.review}</p>
                <div className="review-date">{review.date}</div>
            </div>
        ))}
    </div>
);

export default Reviews;
