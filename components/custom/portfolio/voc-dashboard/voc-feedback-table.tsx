import { formatDate } from "@/lib/portfolio/case-studies/ukme-voc-analytics";
import type { VocFeedbackRecord } from "@/lib/portfolio/case-studies/ukme-voc-types";
import { VocFeedbackTextCell } from "@/components/custom/portfolio/voc-dashboard/voc-feedback-text-cell";
import { VocTablePagination } from "@/components/custom/portfolio/voc-dashboard/voc-table-pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RESPONSIVE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type VocFeedbackTableProps = {
  records: VocFeedbackRecord[];
  totalCount: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

const COLUMNS = [
  "Date",
  "Source",
  "Account",
  "ARR Tier",
  "Product",
  "Platform",
  "Persona / Job Title",
  "Theme",
  "Sub-theme",
  "Sentiment",
  "CSAT",
  "Customer Feedback",
] as const;

function sentimentClass(sentiment: VocFeedbackRecord["sentiment"]): string {
  if (sentiment === "Negative") {
    return "text-destructive";
  }

  if (sentiment === "Positive") {
    return "text-chart-4";
  }

  return "text-muted-foreground";
}

export function VocFeedbackTable({
  records,
  totalCount,
  page,
  pageSize,
  onPageChange,
}: VocFeedbackTableProps) {
  return (
    <section aria-label="Raw feedback table">
      <h4 className={cn("mb-4", RESPONSIVE.caseStudyPrototypeSectionLabel)}>
        Raw feedback evidence
      </h4>

      <div
        className={RESPONSIVE.caseStudyPrototypeTableWrap}
        aria-label="Customer feedback records"
      >
        <Table>
          <TableHeader>
            <TableRow>
              {COLUMNS.map((column) => (
                <TableHead key={column} scope="col">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id} className="h-10">
                <TableCell className="py-2">{formatDate(record.date)}</TableCell>
                <TableCell className="py-2">{record.source}</TableCell>
                <TableCell className="py-2">{record.account}</TableCell>
                <TableCell className="py-2">{record.arrTier}</TableCell>
                <TableCell className="py-2">{record.product}</TableCell>
                <TableCell className="py-2">{record.platform}</TableCell>
                <TableCell className="py-2">{record.persona}</TableCell>
                <TableCell className="py-2">{record.theme}</TableCell>
                <TableCell className="py-2">{record.subTheme}</TableCell>
                <TableCell className={cn("py-2", sentimentClass(record.sentiment))}>
                  {record.sentiment}
                </TableCell>
                <TableCell className="py-2">{record.csat}</TableCell>
                <TableCell className="py-2">
                  <VocFeedbackTextCell feedback={record.feedback} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <VocTablePagination
        page={page}
        pageSize={pageSize}
        totalCount={totalCount}
        onPageChange={onPageChange}
      />
    </section>
  );
}
