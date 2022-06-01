import styles from './ReportsPage.module.scss'
import 'devextreme/dist/css/dx.light.css';
import  { useState } from "react";
import Top3BestEvaluatedCategories from './Reports/Top3BestEvaluatedCategories';
import Top5GamesByAverageGrade from './Reports/Top5GamesByAverageGrade';
import Top5MembersThatEvaluatedTheMost from './Reports/Top5MembersThatEvaluatedTheMost';
import Top5MostEvaluatedGames from './Reports/Top5MostEvaluatedGames';

enum ReportTypes {
  Top5MostEvaluatedGames = 'Top5MostEvaluatedGames',
  Top5MembersThatEvaluatedTheMost = 'Top5MembersThatEvaluatedTheMost',
  Top5GamesByAverageGrade = 'Top5GamesByAverageGrade',
  Top3BestEvaluatedCategories = 'Top3BestEvaluatedCategories'
}

export default function ReportsPage() {

  const [reportType, setReportType] = useState<string>(ReportTypes.Top5MostEvaluatedGames);
  
  const renderBasedOnReportType = () => {
    let render = <div></div>;
    switch (reportType) {
      case ReportTypes.Top3BestEvaluatedCategories:
        render = <Top3BestEvaluatedCategories />
        break;
      case ReportTypes.Top5GamesByAverageGrade:
        render = <Top5GamesByAverageGrade />
        break;
      case ReportTypes.Top5MembersThatEvaluatedTheMost:
        render = <Top5MembersThatEvaluatedTheMost />
        break;
      case ReportTypes.Top5MostEvaluatedGames:
        render = <Top5MostEvaluatedGames />
        break;
    }
    return render;
  }

  return (
    <div >
      <div className={styles.buttons}>
        <button onClick={() => setReportType(ReportTypes.Top5MostEvaluatedGames)} className={'btn btn-primary'}>Top 5 jogos com mais avaliações</button>
        <button onClick={() => setReportType(ReportTypes.Top5MembersThatEvaluatedTheMost)} className={'btn btn-primary'}>Top 5 membros que mais avaliaram</button>
        <button onClick={() => setReportType(ReportTypes.Top5GamesByAverageGrade)} className={'btn btn-primary'}>Top 5 jogos com maior nota média</button>
        <button onClick={() => setReportType(ReportTypes.Top3BestEvaluatedCategories)} className={'btn btn-primary'}>Top 3 categorias melhor avaliadas</button>
      </div>
      <div className={styles.reports}>
        {renderBasedOnReportType()}
      </div>
    </div>
  )

}