import { Form } from "formik"
import Octocat from "react-icons/lib/go/mark-github"
import styled, { css } from "react-emotion"

export const SearchBar = styled(Form)`
  display: flex;
  width: 80%;
  max-width: 1280px;
  margin-top: 16px;
  margin-bottom: 24px;
`

export const HomeIcon = styled(Octocat)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  margin-right: 14px;
`

export const Results = styled(`section`)`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1280px;
  margin-bottom: 15px;
`

export const RepoCount = styled(`h1`)`
  width: 100%;
  padding-bottom: 16px;
  margin-top: 0;
  margin-bottom: 0;
  border-bottom: 1px #e1e4e8 solid;
  font-size: 20px;
  font-weight: 600;
`

export const repo = css`
  display: flex;
  flex-direction: row;
  padding: 24px 0;
  border-top: 1px #e1e4e8 solid;

  &:first-child {
    border-top: 0;
  }

  div {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    width: calc((100% * (1 / 3) / 2));

    &:first-child {
      flex: 1 1 auto;
      width: calc(100% * (2 / 3));
    }

    &:last-child {
      align-items: flex-end;
      padding-right: 16px;
    }

    p {
      margin-bottom: 8px;
      font-size: 14px;
    }

    span:last-child {
      margin-top: 8px;

      p {
        display: inline-block;
        padding-right: 16px;
        margin-bottom: 0;
        font-size: 12px;

        &:last-child {
          padding-right: 0;
        }
      }
    }

    span:first-child {
      display: flex;
      align-items: center;
      margin-top: 0;
      line-height: 30px;

      p {
        padding-left: 4px;
      }

      svg {
        height: 30px;
      }
    }
  }
`

export const Tag = styled(`li`)`
  display: inline-block;
  padding: 0.3em 0.9em;
  margin: 0 0.5em 0.5em 0;
  white-space: nowrap;
  background-color: #f1f8ff;
  border-radius: 3px;
  font-size: 12px;
  color: #0366d6;
`

export const RepoTitle = styled(`a`)`
  font-size: 20px;
  font-weight: 600;
  color: #0366d6;
  text-decoration: none;

  &:hover {
    color: #0366d6;
    text-decoration: underline;
  }
`

export const Language = styled(`span`)`
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`
