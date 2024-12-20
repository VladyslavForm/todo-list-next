import Image from "next/image";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {mockData} from '@/lib/mock-data'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <Card>
          <CardHeader>
            <div className="space-y-1.5">
              <CardTitle>Your tasks</CardTitle>
              <CardDescription>You can create, view, update, and delete them</CardDescription>
            </div>
            <Button variant="outline">Create task</Button>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple">
              {mockData.map(task => {
                return (
                  <AccordionItem key={task.id} value={`item-${task.id}`}>
                    <AccordionTrigger>{task.title}</AccordionTrigger>
                    <AccordionContent>
                      {task.description ?? "No description"}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Swagger documentation
        </a>
      </footer>
    </div>
  );
}
