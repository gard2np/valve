import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import GoogleMapIframe from "~/components/ui/maps/google";

export function Welcome() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">공동사용 밸브 안내</h1>
        <div className="flex flex-col gap-4 w-full max-w-md mt-10">
        <Accordion type="single" collapsible className="w-full max-w-md" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-lg">공동사용 밸브란 무엇인가요?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>지하층에 가스가 공급되는 건물에 지상차단밸브가 없는 경우, 대신 사용하는 도시가스사의 인입밸브입니다.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-lg">건물 관리인이 할 일은 무엇인가요?</AccordionTrigger>
            <AccordionContent className="flex flex-col text-balance">
              <ul className="my-6 ml-6 list-decimal [&>li]:mt-1">
                <li>도시가스 인입밸브 위치 숙지</li>
                <li>도시가스 인입밸브 OPEN / CLOSE 방법 숙지</li>
                <li>도시가스 교육 이수</li>
                <li>관리인 변경 시 해당 내용 인수인계</li>
                <li>화재 발생 시 도시가스 상황실에 연락</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">  
            <AccordionTrigger className="font-bold text-lg">관련 법령은 무엇인가요?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>도시가스 사업법의 하위 규정인 『KGS CODE FU551 (사용시설의 시설 기술 검사) FU551 2.4.4.1 지하공급 차단밸브』 에 따라 도시가스의 밸브를 사용동의 요청하시고 교육을 받으셔야 합니다.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-lg">비상연락망</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <a href="tel:041-530-1900">
                <Button className="w-full">
                  JB 상황실에 전화하기
                </Button>
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold text-lg">밸브 위치 확인하기</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="w-full max-w-md mt-2">
          <GoogleMapIframe lat={37.416} lng={127.2527145} />
            </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>  
        </div>        
      </div>
    </div>
  );
}