import React, { useState } from 'react';
// import { NotificationContainer, NotificationManager } from "react-notifications"
import { useDispatch, useSelector } from 'react-redux';
import './comment.scss'

const DanhGia = () => {
    const dispatch = useDispatch();
    const userComment = useSelector((state) => state.detail.comment);
    const startComment = useSelector((state) => state.detail.listStar);
    const [rate, setRate] = useState(0);
    const [comment, setComment] = useState('')

    const renderStar = (star) => {
        let items = [];
        for (let i = 0; i < 5; i++) {
            if (i < star) items.push(<i className="fa fa-star active" aria-hidden="true"></i>);
            else items.push(<i className="fa fa-star" aria-hidden="true"></i>);
        }
        return items.map(item => {
            return (<>{item}</>)
        });
    }
    const renderCommentUser = () => {
        return userComment && userComment.map((item) => {
            return (
                <>
                    <div className="comment-list-title">{item.user} <span className="comment-list-star">{renderStar(item.star)}</span></div>
                    <div className="comment-list-content">{item.comment}</div>
                </>
            )
        })
    }
    const onClickStar = (index) => {
        setRate(index)
    }

    const renderStarComment = () => {
        return startComment && startComment.map((item, index) => {
            let isActive = false;
            if (index <= rate) {
                isActive = true
            }

            return (
                <i key={item.id} className={isActive ? 'fa fa-star active' : 'fa fa-star'} onClick={() => onClickStar(index)} aria-hidden="true"></i>
            )
        })
    }

    const onClickPostComment = () => {
        const credentialStr = JSON.parse(localStorage.getItem("credentials"));
        const star = rate + 1;
        if (credentialStr) {
            dispatch(
                {
                    type: "EDIT-COMMENT",
                    payload: { user: credentialStr.hoTen, star: star, comment: comment },
                }
            )
        }
    }
    const oncChangeText = e => {
        setComment(e.target.value)
    }
    return (
        <div id="comment" className="comment">
            <div className="comment-textarea">
                <textarea value={comment} onChange={e => oncChangeText(e)} rows="4" className="comment-input" placeholder="Nhập nội dung bình luận"></textarea>
            </div>
            <div className="comment-rating">
                <div>Đánh giá: {renderStarComment()}</div>
                <div>
                    <button className="comment-button" onClick={() => onClickPostComment()} variant="contained" color="primary" type="submit">Bình luận</button>
                </div>
            </div>
            <div className="comment-list">
                <h3 className="heading-left">Danh sách bình luận</h3>
                {renderCommentUser()}
            </div>
        </div>
    )
}

export default DanhGia
