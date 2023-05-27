import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BasicExample() {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12} sm={11}>
          <Table bordered>
            <thead>
              <tr
                style={{
                  backgroundColor: "rgb(13, 77, 5, 0.1)",
                  verticalAlign: "middle",
                }}
              >
                <th>항목</th>
                <th>평가 도구</th>
                <th>측정 내용</th>
              </tr>
            </thead>
            <tbody
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                fontSize: "0.9rem",
              }}
            >
              {/* 1 */}
              <tr>
                <td rowspan="3">인지검사</td>
                <td>K-WIPPSI-V (한국 웩슬러 유아지능검사)</td>
                <td rowspan="3">
                  전체지능 지수와 인지적 장/단점 및 지적기능의 효율성에 대한
                  측정
                </td>
              </tr>
              <tr>
                <td>K-WISC-V (한국 웩슬러 아동지능검사)</td>
              </tr>
              <tr>
                <td>K-WAIS (한국 웩슬러 성인지능검사)</td>
              </tr>
              {/* 2 */}
              <tr>
                <td rowspan="7">정서검사</td>
                <td>MMPI-A/MMPI-2 (다면적인성검사)</td>
                <td>개인의 성격 특성 및 정신병리적 상태를 측정</td>
              </tr>
              <tr>
                <td>TCI (기질성격검사)</td>
                <td>
                  기질과 성격에 관한 평가로 개인의 사고방식, 감정양식, 대인관계
                  양상, 선호 경향을 측정
                </td>
              </tr>
              <tr>
                <td>Rorschach (로샤 검사)</td>
                <td rowspan="5">
                  무의식적 욕구와 태도, 인지적 정서적 기능 상태 자아의 기능
                  상태, 자아 탄력성, 성격의 특성의 측정
                </td>
              </tr>
              <tr>
                <td>BGT (벤더 게슈탈트 검사)</td>
              </tr>
              <tr>
                <td>HTP (집-나무-사람그림 검사)</td>
              </tr>
              <tr>
                <td>KFD (동적가족 그림검사)</td>
              </tr>
              <tr>
                <td>SCT (문장완성검사)</td>
              </tr>
              {/* 3 */}
              <tr>
                <td rowspan="3">부모검사</td>
                <td>PAT (부모양육태도)</td>
                <td rowspan="3">
                  아동 종합심리검사 시 양육자가 자녀에게 미치는 영향을 확인하고
                  부모의 심리적 어려움과 성격적 특성을 측정
                </td>
              </tr>
              <tr>
                <td>MMPI-2 (성인 다면적인성검사)</td>
              </tr>
              <tr>
                <td>SCT (성인 문장완성검사)</td>
              </tr>
              {/* 4 */}
              <tr>
                <td rowspan="3">기타검사</td>
                <td>ADHD Scale (주의력결핍 선별검사)</td>
                <td rowspan="3">필요시 추가로 검사 실시</td>
              </tr>
              <tr>
                <td>CARS (아동자폐평정척도검사)</td>
              </tr>
              <tr>
                <td>SMS (사회성숙도검사)</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

export default BasicExample;
