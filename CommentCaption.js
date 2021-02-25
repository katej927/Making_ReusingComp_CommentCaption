import React from "react";
import styled from "styled-components";
import LikedIcon from "../Icons/LikedIcon";
import ProfilePic from "../ProfilePic/ProfilePic";
import { TimeFormat } from "../TimeFormat";
import BundleOfDotBtnModal from "../DotMenu/BundleOfDotBtnModal";

/**
 *
 *@param {string} loading - likeCount(쉼표 계산 후 보낼 것)
 */

export default function CommentCaption(props) {
  const {
    src,
    hasTodayLive,
    accountName,
    content,
    postTime,
    likeCount,
    isLiked,
    isComment,
  } = props;

  const dotBtnContent = ["신고"];

  const dotBtnDivStyles = {
    padding: "5px",
    opacity: "0.7",
    "background-color": "white",
  };

  return (
    <CommentCaptionWrapper isComment={isComment}>
      <ProfilePicWrapper>
        <ProfilePic src={src} hasTodayLive={isComment ? false : hasTodayLive} />
      </ProfilePicWrapper>
      <TextWrapper>
        <Content>
          <AccountId>{accountName}</AccountId>
          {content}
        </Content>
        <Bundle isComment={isComment}>
          <PostTime>{TimeFormat(postTime)}</PostTime>
          {isComment && <LikeCount>좋아요 {likeCount}개</LikeCount>}
          {isComment && <ReplyBtn>답글달기</ReplyBtn>}
        </Bundle>
      </TextWrapper>
      <IconWrapper show={isComment}>
        <BundleOfDotBtnModal
          datatype={dotBtnContent}
          dotBtnDivStyles={dotBtnDivStyles}
        />
        <LikedIcon
          isFilled={isLiked}
          size={"12px"}
          styles={{ "margin-top": "9px" }}
        />
      </IconWrapper>
    </CommentCaptionWrapper>
  );
}

const CommentCaptionWrapper = styled.section`
  position: relative;
  border: 1px solid purple;
  display: flex;
  padding: 12px 16px ${(props) => (props.isComment ? "0px" : "16px")};
`;

const ProfilePicWrapper = styled.div`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

const TextWrapper = styled.div`
  border: 1px solid black;
  width: 215px;
`;

const IconWrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  right: 16px;
`;

const AccountId = styled.span`
  margin-right: 4px;
  font-weight: 600;
`;

const Content = styled.div`
  font-size: 14px;
`;

const Bundle = styled.div`
  margin: ${(props) => (props.isComment ? "-2px 0 -3px" : "16px 0px -2px")};
`;

const LikeCount = styled.button`
  margin-right: 12px;
  padding: 0px;
  font-size: 12px;
  color: rgba(var(--f52, 142, 142, 142), 1);
`;

const PostTime = styled(LikeCount.withComponent("span"))``;

const ReplyBtn = styled(LikeCount)``;
