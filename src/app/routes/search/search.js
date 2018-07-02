import React from "react"
import { Formik, Field } from "formik"
import {
  FieldBody,
  Field as InputField,
  Control,
  Icon,
  Input,
  Select,
  Button
} from "bloomer"
import { GoCode, GoX } from "react-icons/lib/go"
import { connect } from "react-redux"
import { search, resetSearch } from "./actions"
import { Layout } from "../../components/structural"
import { SearchBar, HomeIcon, Link } from "./elements"
import { SearchResults } from "./searchResults"
import { programmingLanguages } from "./languages"

const mapStateToProps = (state, ownProps) => ({ ...ownProps })

const mapDispatchToProps = dispatch => ({
  search: (query, language) =>
    dispatch(
      search(query, language ? `language:${language.toLowerCase()} ` : ``)
    ),
  resetSearch: () => dispatch(resetSearch())
})

const Element = ({ search, resetSearch }) => (
  <Layout>
    <Formik
      onSubmit={({ query, language }, { setSubmitting, setErrors }) => {
        search(query, language)
        setSubmitting(false)
      }}
      onReset={() => {
        resetSearch()
      }}
      initialValues={{ query: ``, language: `` }}
    >
      {({
        values,
        handleBlur,
        handleChange,
        handleReset,
        handleSubmit,
        dirty,
        isSubmitting
      }) => (
        <SearchBar id="intervalControls">
          <Link href="/">
            <HomeIcon size={32} />
          </Link>
          <FieldBody>
            <InputField isHorizontal hasAddons="centered">
              <Control hasIcons="left">
                <Icon isAlign="left">
                  <GoCode color="#363636" />
                </Icon>
                <Field
                  id="language"
                  name="language"
                  value={values.language}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  component={Select}
                  isColor="dark"
                >
                  {programmingLanguages.map(({ value, label }, i) => (
                    <option key={i} value={value} label={label}>
                      {label}
                    </option>
                  ))}
                </Field>
              </Control>
              <Control isExpanded>
                <Field
                  id="query"
                  name="query"
                  value={values.query}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyPress={e => {
                    if (e.key === `Enter`) handleSubmit(e)
                  }}
                  component={Input}
                  placeholder="Search Repositories"
                  isColor="dark"
                />
              </Control>
              <Control>
                <Button
                  disabled={!dirty}
                  isColor="dark"
                  isOutlined
                  onClick={handleReset}
                >
                  <Icon isAlign="right">
                    <GoX />
                  </Icon>
                </Button>
              </Control>
              <Control>
                <Button
                  isActive={isSubmitting}
                  disabled={isSubmitting}
                  isColor="dark"
                  onClick={handleSubmit}
                >
                  Search
                </Button>
              </Control>
            </InputField>
          </FieldBody>
        </SearchBar>
      )}
    </Formik>
    <SearchResults />
  </Layout>
)

export const Search = connect(mapStateToProps, mapDispatchToProps)(Element)
