from typing import Annotated, Any
from fastapi import FastAPI, Query
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from pydantic import BaseModel

app = FastAPI()

class SumAPIResponse(BaseModel):
    success: bool
    value: int | None = None
    error: str | None = None

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc: RequestValidationError):
    return JSONResponse(
        status_code=422,
        content=SumAPIResponse(
            success=False,
            error=f"Validation Error: {exc.errors()}"
        ).model_dump()
    )

@app.post('/sum')
def sum_up_to(upto: Annotated[int, Query(ge=1)]) -> SumAPIResponse:
    summation = sum(i for i in range(upto+1))
    return SumAPIResponse(
        success=True,
        value=summation,
        error=None
    )
